const UserInteraction = require("../model/userInteraction");
const jwt = require("jsonwebtoken");

const likePost = async (req, res) => {
  const { postId } = req.params;
  const { userToken } = req.cookies;
  const user = jwt.verify(userToken, process.env.JWT_SECRET, {});
  // console.log(user, "user");
  try {
    let userInteraction = await UserInteraction.findOne({
      user: user.id,
      post: postId,
    }).populate("user", "username");

    if (!userInteraction) {
      userInteraction = await UserInteraction.create({
        user: user.id,
        post: postId,
      });
    }

    userInteraction.liked = !userInteraction.liked;
    await userInteraction.save();
    return res.json({ success: true, liked: userInteraction });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};

const getLikes = async (req, res) => {
  const { postId } = req.params;
  // console.log("post Id for get Likes", postId);
  try {
    const Likes = await UserInteraction.find({
      post: req.params.postId,
      liked: true,
    }).populate("user", "username , pic");
    return res.status(200).json(Likes);
  } catch (err) {
    console.log(err);
  }
};
//*test is work
const test = (req, res) => {
  try {
    return res.status(200).json("route is ok");
  } catch (err) {
    console.log("Like Post Errr", err);
    return err;
  }
};
module.exports = {
  likePost,
  test,
  getLikes,
};
