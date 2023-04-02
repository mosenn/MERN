// const { Router } = require("express");
// const router = new Router();

const express = require("express");
const router = express.Router();
const { registerUser, loginUser } = require("../controller/user");

//? this way can add multiple route in one line
// router.route("/").post(registerUser);

//!API POST
//*USERS TO DATABASE
router.post("/", registerUser);
//*LOGIN USERS
router.post("/userLogin", loginUser);

module.exports = router;
