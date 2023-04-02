// const { Router } = require("express");
// const router = new Router();

const express = require("express");
const router = express.Router();
const { registerUser } = require("../controller/user");

//? this way can add multiple route in one line
// router.route("/").post(registerUser);

router.post("/", registerUser);

module.exports = router;
