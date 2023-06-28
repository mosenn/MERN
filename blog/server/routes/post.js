const postRouter = require("express").Router();
const { createPost, posts } = require("../controller/post");

postRouter.post("/createpost", createPost);
postRouter.get("/posts", posts);
module.exports = postRouter;
