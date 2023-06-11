const { hash } = require("../middleware/bcrypt");
const mongoose = require("mongoose");
// const bcrypt = require("bcryptjs");

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

// userSchema.statics.userValidation = (reqBody) => {
//   return userValidation.validate(reqBody, { abortEraly: false });
// };

//*hash password
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



const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
