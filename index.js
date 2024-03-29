const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const connectDB = require("./config/db");
const sendMail = require("./workers/sendMail");

//bring in required models
const Job = require("./models/Job");



//connect to mongodb
connectDB();

//set app.use
app.use(cors());
app.use(express.json());

//set app.use
app.use(cors());
app.use(express.json());


//Create route to retrieve jobs
app.get("/api/jobs", async (req, res) => {

  
  try {
    let jobs;

    if (req.query.limit) {
      console.log('fetching jobs with limit')
      jobs = await Job.find({})
        .lean()
        .limit(Number(req.query.limit))
        .sort("-date");

    }
    if (req.query.category) {
      jobs = await Job.find({
        categories: { $regex: req.query.category, $options: "i" },
      })
        .lean()
        .limit(60)
        .sort("-date");
    }
    if (req.query.all) {
      console.log('fetching all jobs')
      jobs = await Job.find({}).lean().limit(400).sort("-date");
      console.log(jobs)
    }

    if (req.query.skip) {
      jobs = await Job.find({})
        .lean()
        .skip(Number(req.query.skip))
        .limit(50)
        .sort("-date");
    }
    res.status(200).json({ jobs });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

//Create route for contact form to send email

app.post("/api/contact", async (req, res) => {
  const { contactName, contactEmail, contactMessage } = req.body.contactData;
  try {
    await sendMail(contactName, contactEmail, contactMessage);

    res.status(200).json({ success: true });
    console.log("email success");
  } catch (err) {
    res.json({ success: false });
    console.log(err.message);
  }
});


const PORT = process.env.PORT || 8080;

app.listen(5000, () => console.log("server started "));
