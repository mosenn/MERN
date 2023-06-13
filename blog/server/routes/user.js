const userRoute = require("express").Router();
const { registerUser, loginUser } = require("../controller/user");

//* POST create user (register user)
userRoute.post("/register", registerUser);
userRoute.post("/login", loginUser);

module.exports = userRoute;
