const User = require("../models/user");
const bycrypt = require("bcryptjs");
const { FunCreateToken } = require("../config/token");

//*Create User (registerUser)
const registerUser = async (req, res) => {
  const { email, name, password, pic } = req.body;
  try {
    const TakeEmailUser = await User.findOne({ email });

    if (TakeEmailUser) {
      res.status(422).send("email hase existed");
    }

    const user = await User.create({
      email,
      name,
      password,
      pic,
    });

    if (user) {
      res.status(201).json({
        _id: user._id,
        name: user.name,
        password: user.password,
        pic: user.pic,
        token: FunCreateToken(user._id),
        updateAt: user.updatedAt,
        createAt: user.createdAt,
      });
    }
  } catch (err) {
    console.log(err.message);
  }
};

//*Login
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  const matchPassword = await bycrypt.compare(
    user.password,
    password
  );
  try {
    if (user && matchPassword) {
      res.status(200).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        password: user.password,
        createAt: user.createdAt,
        updateAt: user.updatedAt,
      });
    }
  } catch (err) {
    res.status(404).send("this user not found");
  }
};
module.exports = {
  registerUser,
  loginUser,
};
