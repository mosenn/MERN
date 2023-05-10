const mongoose = require("mongoose");
const { hash } = require("../middleware/bcrypt");
const userValidation = require("../middleware/userValidation");
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
  pic: {
    type: String,
    // required: true,
    default:
      "https://images.unsplash.com/photo-1680252111945-c80eabc8e191?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80",
  },
});

//*validation
userSchema.statics.userValidation = (reqBody) => {
  return userValidation.validate(reqBody, { abortEarly: false });
};

//*hash passwird
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
