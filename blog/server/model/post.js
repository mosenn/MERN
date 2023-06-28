const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    summery: {
      type: String,
      required: true,
    },
    cover: {
      type: String,
      // required: true,
    },
    content: {
      type: String,
      required: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
  },
  {
    timestamps: true,
  }
);

const postModel = mongoose.model("posts", postSchema);

module.exports = postModel;
