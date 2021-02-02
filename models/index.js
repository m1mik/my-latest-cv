const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: false },
    isDone: { type: Boolean, required: true, default: false },
    owner: { type: mongoose.Schema.Types.ObjectId, required: true },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

module.exports = mongoose.model("todo", TodoSchema);
