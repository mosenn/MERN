const userModel = require("../model/user");
const usersModel = require("../model/user");

const registerUser = async (req, res) => {
  const errors = {};
  const { username, confirmPassword, password, pic } = req.body;
  try {
    const validate = await usersModel.userRegisterValid(req.body);
    const foundUser = await userModel.findOne({ username });
    if (foundUser) {
      errors.username = "this user before register";
    }
    const users = await usersModel.create({
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

module.exports = {
  registerUser,
};
