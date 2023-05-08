const userRoute = require("express").Router();
const { AccessTokenGithub } = require("../controller/githubLogin");
userRoute.get("/getAccessToken", AccessTokenGithub);

//*test route
userRoute.get("/user", (req, res) => {
  res.send("this coming from user route");
});

module.exports = userRoute;
