const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const { HashingPW, hash } = require("../middleware/bcrypt");
const userSchema = new mongoose.Schema({
  email: {
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
    required: true,
  },
});
userSchema.pre("save", async function (next) {
  if (!this.isModified) {
    next();
  }
  //*new update for hasing most be get this in model
  const { hashPassword, hashConfirmPassword } = await hash(
    this.password,
    this.confirmPassword
  );
  this.password = hashPassword;
  this.confirmPassword = hashConfirmPassword;
});
const userModel = mongoose.model("userRegister", userSchema);

module.exports = userModel;
