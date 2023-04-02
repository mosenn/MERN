const { Router } = require("express");
const router = new Router();

const { registerUser } = require("../controller/user");

router.post("/", registerUser);

module.exports = router;
