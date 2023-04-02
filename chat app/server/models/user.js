const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: [true, "need name for account"] },
    email: {
      type: String,
      required: [true, "set email for account"],
    },
    password: {
      type: String,
      required: [true, "password cant be empty"],
    },
    pic: {
      type: String,
      required: true,
      default:
        "https://images.unsplash.com/photo-1680252111945-c80eabc8e191?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80",
      required: [true, "need profile picture pls set"],
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
