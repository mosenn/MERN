const User = require("../model/User");
const jwt = require("jsonwebtoken");

//*Create user
const registerUser = async (req, res) => {
  const { username, password } = req.body;
  console.log("username:", username, "password:", password);

  try {
    const createUser = await User.create({ username, password });
    jwt.sign(
      { userId: createUser._id, name: createUser.username },
      "secret",
      {},
      (err, token) => {
        if (err) throw err;
        res
          .cookie("token", token, {
            // httpOnly: true,
            secure: true,
            sameSite: "none",
            // maxAge: 90000000,
          })
          .status(201)
          .json({
            id: createUser._id,
            username: createUser.username,
            token: token,
          });
      }
    );
  } catch (err) {
    return res.status(500).send(err);
  }
};

//*User Profile
const userProfile = async (req, res) => {
  try {
    const token = req.cookies?.token;
    console.log("token", token);
    if (token) {
      const decode = jwt.verify(token, "secret");
      return res.status(200).json(decode);
    } else {
      return res.status(404).json("token is not found");
    }
  } catch (err) {
    res.status(401).json({ err: err, message: "no token" });
  }
  //?----------- v-code
  // try {
  //   const token = req.cookies?.token;
  //   console.log(token, "token");
  //   if (token) {
  //     jwt.verify(token, "secret", {}, (err, userData) => {
  //       if (err) throw err;
  //       console.log(userData, "userdata");
  //       return res.status(200).json(userData);
  //     });
  //   } else {
  //     throw err;
  //   }
  // } catch (err) {
  //   res.status(401).json({ err: err, message: "no token" });
  // }
};

module.exports = { registerUser, userProfile };
