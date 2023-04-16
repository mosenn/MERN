const User = require("../model/User");
const jwt = require("jsonwebtoken");

//*Create user
const registerUser = async (req, res) => {
  const { username, password } = req.body;
  console.log("username:", username, "password:", password);

  try {
    const createUser = await User.create({ username, password });
    jwt.sign({ userId: createUser._id }, "secret", {}, (err, token) => {
      if (err) throw err;
      res
        .cookie("token", token, {
          httpOnly: true,
          secure: false,
          path: "http://127.0.0.1:5173/" || "http://127.0.0.1:5173",
          domain: "http://127.0.0.1:5173/" || "http://127.0.0.1:5173",
          sameSite: "none",
        })
        .status(201)
        .json({ id: createUser._id, username: createUser.username });
    });
  } catch (err) {
    return res.status(500).send(err);
  }
};
//*User Profile
const userProfile = async (req, res) => {
  console.log(req.cookies, "cookie");
  const { token } = req.cookies;

  try {
    return res
      .status(200)
      .json({ coockie: req.cookies, message: "this cookie" });
  } catch (err) {
    console.log(err.message);
  }
};
module.exports = { registerUser, userProfile };
