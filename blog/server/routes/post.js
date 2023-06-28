const postRouter = require("express").Router();
const { createPost } = require("../controller/post");

postRouter.post("/createpost", createPost);

module.exports = postRouter;
