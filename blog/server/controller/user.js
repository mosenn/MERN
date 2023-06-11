const usersModel = require("../model/user");

const registerUser = async (req, res) => {
  const { username, confirmPassword, password, pic } = req.body;
  try {
    const users = await usersModel.create({
      username,
      password,
      confirmPassword,
      pic,
    });
    console.log(users);
    return res.status(201).json(users);
  } catch (err) {
    res.status(400).send("user is not create");
    console.log("register user routes error", err);
  }
};

module.exports = {
  registerUser,
};
