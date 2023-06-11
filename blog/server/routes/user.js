const userRoute = require("express").Router();
const { registerUser } = require("../controller/user");

//* POST create user (register user)
userRoute.post("/register", registerUser);

module.exports = userRoute;
