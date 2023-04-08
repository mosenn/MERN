const express = require("express");
const router = express.Router();
const { usersChat, accessChat } = require("../controller/chat");
const { protect } = require("../middleware/auth");
// *chats users
router.post("/chat", protect, accessChat);
router.get("/chat", protect, usersChat);
//*
// router.post("/group", protect, createGroupChat);
// router.put("/rename", protect, renameGroup);
// router.put("/groupremove", protect, removeFromGroup);
// router.put("/groupadd", protect, addToGroup);

module.exports = router;
