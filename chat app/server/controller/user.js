const User = require("../models/user");
const bcrypt = require("bcryptjs");
const { FunCreateToken } = require("../config/token");

//*Create User (registerUser)
const registerUser = async (req, res) => {
  const { email, name, password, pic, confirmPassword } = req.body;
  try {
    await User.validationUsers(req.body);

    const Useremail = await User.findOne({ email });

    if (Useremail) {
      return res.status(422).json("email has existed");
    }

    const user = await User.create({
      email,
      name,
      password,
      confirmPassword,
      pic,
    });

    if (user) {
      return res.status(201).json({
        _id: user._id,
        name: user.name,
        password: user.password,
        confirmPassword: user.confirmPassword,
        pic: user.pic,
        token: FunCreateToken(user._id),
        updateAt: user.updatedAt,
        createAt: user.createdAt,
      });
    }
  } catch (ex) {
    console.log(ex.errors);

    //* set yup
    console.log(ex.errors);
    res.status(422).send(ex);
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
      return res.status(200).json({
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
    return res
      .status(404)
      .send(
        err,
        "someting proplem for loginUser Route in user.js controller"
      );
  }
};
module.exports = {
  registerUser,
  loginUser,
};
