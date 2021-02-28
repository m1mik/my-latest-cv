const mongoose = require("mongoose");

const LinkSchema = new mongoose.Schema({
  text: { type: String, required: true },
  url: { type: String, required: true },
  todoOwner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "todo",
    required: true,
  },
});

module.exports = mongoose.model("link", LinkSchema);
