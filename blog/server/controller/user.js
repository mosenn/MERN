const usersModel = require("../model/user");

const registerUser = async (req, res) => {
  const { username, confirmPassword, password, pic } = req.body;
  try {
    const validate = await usersModel.userRegisterValid(req.body);
    const users = await usersModel.create({
      username,
      password,
      confirmPassword,
      pic,
    });
    // console.log(users);
    return res.status(201).json(users);
  } catch (err) {
    const errors = {};
    err?.inner?.forEach((e) => {
      errors[e.path] = e.message;
    });
    return res.status(400).json(errors);
  }
};

module.exports = {
  registerUser,
};
