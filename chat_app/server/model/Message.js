import { schema } from "./User";

const mongoose = require("mongoose");

const SchemaMessage = new mongoose.Schema(
  {
    sender: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    recipinet: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    text: String,
  },
  {
    timestamps: true,
  }
);

const Message = mongoose.model("Messaage", SchemaMessage);

module.exports = Message;
