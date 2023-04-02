const User = require("../models/user");

const { FunCreateToken } = require("../config/token");

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
    res.status(422).send(err.message);
  }
};

module.exports = {
  registerUser,
};
