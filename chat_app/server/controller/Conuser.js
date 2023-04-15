const User = require("../model/User");
const jwt = require("jsonwebtoken");
const registerUser = async (req, res) => {
  const { username, password } = req.body;
  console.log("username:", username, "password:", password);
  console.log(res.coockie, "coockie");
  try {
    const createUser = await User.create({ username, password });
    jwt.sign({ userId: createUser._id }, "secret", {}, (err, token) => {
      if (err) throw err;
      return res
        .cookie("token", token)
        .status(201)
        .json({ id: createUser._id, username: createUser.username });
    });

    // return res.status(201).json(createUser);
  } catch (err) {
    // return res.status(500).json(err, "jwt have proplem");
    return res.status(500).json({ err: err, message: "jwt have proplem" });
  }
};

module.exports = { registerUser };
