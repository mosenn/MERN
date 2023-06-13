const userRoute = require("express").Router();
const { registerUser, loginUser, profileUser } = require("../controller/user");

//* POST create user (register user)
userRoute.post("/register", registerUser);
//* POST login user
userRoute.post("/login", loginUser);
//* Get cookie (jwt user token)
userRoute.get("/profile", profileUser);
module.exports = userRoute;
