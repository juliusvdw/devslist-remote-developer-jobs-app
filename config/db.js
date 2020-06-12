const mongoose = require("mongoose");

const config = require("config");
const dbURI = config.get("dbURI");

module.exports = async function connectDB() {
  try {
    await mongoose.connect(
      `${dbURI}`,

      { useNewUrlParser: true, useUnifiedTopology: true }
    );

    console.log("mongodb connected to devslist cluster...");
  } catch (err) {
    console.log(err.message);
  }
};
