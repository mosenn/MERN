const { compare } = require("../middleware/bcrypt");
const userModel = require("../model/user");
const jwt = require("jsonwebtoken");
//* user register
const registerUser = async (req, res) => {
  const errors = {};
  const { username, confirmPassword, password, pic } = req.body;
  try {
    const validate = await userModel.userRegisterValid(req.body);
    const foundUser = await userModel.findOne({ username });
    if (foundUser) {
      errors.username = "this user before register";
    }
    const users = await userModel.create({
      username,
      password,
      confirmPassword,
      pic,
    });
    // console.log(users);
    return res.status(201).json(users);
  } catch (err) {
    err?.inner?.forEach((e) => {
      errors[e.path] = e.message;
    });
    return res.status(400).json(errors);
  }
};
//* user login
const loginUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await userModel.findOne({ username });
    const passowrdIsOky = await compare(password, user.password);
    console.log(passowrdIsOky);
    if (passowrdIsOky) {
      const userToken = await jwt.sign(
        "userLoginToken",
        process.env.JWT_SECRET,
        {},
        {
          id: user._id,
          username: user.username,
        }
      );
      return res
        .status(200)
        .cookie("userToken", userToken, {
          secure: "false",
          sameSite: "none",
        })
        .json("ok");
    }
  } catch (err) {
    console.log(err);
  }
};
module.exports = {
  registerUser,
  loginUser,
};
