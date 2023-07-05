const routerUserIntract = require("express").Router();

const { likePost, test , getLikes } = require("../controller/userInteraction");

routerUserIntract.post("/likedPost/:postId", likePost);
routerUserIntract.get("/likes/:postId", getLikes);
routerUserIntract.post("/testLike", test);
module.exports = routerUserIntract;
