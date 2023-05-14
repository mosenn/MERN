const loginRegisterRouter = require("express").Router();
const { register, login } = require("../controller/registerAndLoginUser");
const googleRecapcha = require("../controller/googelRecapcha");
const multer = require("multer");

const upload = multer({
  dest: "uploads/",
});

//
//*register
loginRegisterRouter.post("/register", upload.single("image"), register);

//*login
loginRegisterRouter.post("/login", login);
//*google recapcha
loginRegisterRouter.post("/recapcha", googleRecapcha);

module.exports = loginRegisterRouter;
