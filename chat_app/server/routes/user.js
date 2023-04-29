const userRouter = require("express").Router();
const {
  registerUser,
  userProfile,
  login,
  onlinePepole,
} = require("../controller/Conuser");

userRouter.post("/register", registerUser);
userRouter.post("/login", login);
userRouter.get("/profile", userProfile);
userRouter.get("/pepole", onlinePepole);

module.exports = userRouter;
