const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  confirmPassword: {
    type: String,
    require: true,
  },
  pic: {
    type: String,
  },
});

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
