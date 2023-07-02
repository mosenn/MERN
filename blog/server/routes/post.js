const postRouter = require("express").Router();
const {
  createPost,
  posts,
  userPost,
  deleteUserPost,
} = require("../controller/post");

postRouter.post("/createpost", createPost);
postRouter.get("/posts", posts);
postRouter.get("/userposts", userPost);
postRouter.delete("/deletepostuser/:id", deleteUserPost);
module.exports = postRouter;
