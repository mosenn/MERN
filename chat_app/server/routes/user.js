const userRouter = require("express").Router();
const { registerUser, userProfile, login } = require("../controller/Conuser");

userRouter.post("/register", registerUser);
userRouter.post("/login", login);
userRouter.get("/profile", userProfile);

module.exports = userRouter;
