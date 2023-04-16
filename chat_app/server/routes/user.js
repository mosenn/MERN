const userRouter = require("express").Router();
const { registerUser, userProfile } = require("../controller/Conuser");

userRouter.post("/register", registerUser);
userRouter.get("/profile", userProfile);




module.exports = userRouter;
