const userRoute = require("express").Router();
const { AccessTokenGithub } = require("../controller/user");
userRoute.get("/getAccessToken", AccessTokenGithub);

userRoute.get("/user", (req, res) => {
  res.send("this coming from user route");
});

module.exports = userRoute;

// try {
//     const code = req.query.code;
//     console.log("code : ", code);
//     const token = await getAccessToken(code);
//     console.log("token in route getAccessToken :", token);
//     //* Store the token in the session
//     return res.json({ token });
//   } catch (err) {
//     console.log(err, "err");
//   }
