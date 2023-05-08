const loginRegisterRouter = require("express").Router();
const { register, login } = require("../controller/registerAndLoginUser");
//*register
loginRegisterRouter.post("/register", register);

//*login
loginRegisterRouter.get("/login", login);

module.exports = loginRegisterRouter;
