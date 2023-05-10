const loginRegisterRouter = require("express").Router();
const { register, login } = require("../controller/registerAndLoginUser");
const multer = require("multer");

const upload = multer({
  dest: "uploads/",
});

//
//*register
loginRegisterRouter.post("/register", upload.single("image"), register);

//*login
loginRegisterRouter.post("/login", login);

module.exports = loginRegisterRouter;
