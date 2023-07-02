const commentRouter = require("express").Router();

const { getCommentsByPost, createComment } = require("../controller/comment");
commentRouter.get("/comment/:post", getCommentsByPost);
commentRouter.post("/comments", createComment);

module.exports = commentRouter;
