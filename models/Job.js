const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema({
  title: String,
  description: String,
  company: String,
  date: String,
  link: String,
  categories: Array,
});

module.exports = mongoose.model("Job", JobSchema);
