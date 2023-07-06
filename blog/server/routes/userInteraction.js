const routerUserIntract = require("express").Router();

const {
  toggelLikePost,
  test,
  getLikes,
  toggelSavePost,
  getSave,
} = require("../controller/userInteraction");

routerUserIntract.post("/likedPost/:postId", toggelLikePost);

routerUserIntract.post("/savedPost/:postId", toggelSavePost);
routerUserIntract.get("/likes/:postId", getLikes);
routerUserIntract.get("/saves/:postId", getSave);
routerUserIntract.post("/testLike", test);
module.exports = routerUserIntract;
