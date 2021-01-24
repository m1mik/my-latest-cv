const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  duration: { type: String, required: true },
  description: { type: String, required: true },
  stack: { type: Array, required: true },
  responsibilities: { type: Array, required: true },
});

const Project = mongoose.model("project", ProjectSchema);

module.exports = Project;
