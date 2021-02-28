const mongoose = require("mongoose");

const CvSchema = new mongoose.Schema({
  name: { type: String, required: true },
  onwer: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
  projects: [
    { type: mongoose.Schema.Types.ObjectId, ref: "project", required: true },
  ],
});

const CV = mongoose.model("cv", CvSchema);

module.exports = CV;
