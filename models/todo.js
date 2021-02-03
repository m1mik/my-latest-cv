const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: false },
  isDone: { type: Boolean, required: true, default: false },
  owner: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "user" },
  created_at: {
    type: String,
    required: true,
    default: new Date().toISOString(),
  },
  done_at: {
    type: String,
    required: false,
    default: "",
  },
});

module.exports = mongoose.model("todo", TodoSchema);
