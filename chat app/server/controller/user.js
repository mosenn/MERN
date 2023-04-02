const User = require("../models/user");
const bcrypt = require("bcryptjs");
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

  const matchPassword = await bcrypt.compare(password, user.password);
  console.log(matchPassword, "matchpassword");
  try {
    if (user && matchPassword) {
      res.status(200).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        password: user.password,
        createAt: user.createdAt,
        updateAt: user.updatedAt,
        token: FunCreateToken(user._id),
      });
    } else {
      return res.status(404).send("username or password worng");
    }
  } catch (err) {
    return res.status(404).send(err, "this user not found");
  }
};
module.exports = {
  registerUser,
  loginUser,
};
