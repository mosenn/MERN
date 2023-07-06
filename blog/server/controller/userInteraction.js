const userInteractionModel = require("../model/userInteraction");
const UserInteraction = require("../model/userInteraction");
const jwt = require("jsonwebtoken");

const toggelLikePost = async (req, res) => {
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
    return res.json({
      success: true,
      liked: userInteraction,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};

const toggelSavePost = async (req, res) => {
  const { postId } = req.params;
  const { userToken } = req.cookies;
  const user = jwt.verify(userToken, process.env.JWT_SECRET, {});
  try {
    let save = await userInteractionModel.findOne({
      user: user.id,
      post: postId,
    });
    if (!save) {
      save = await userInteractionModel.create({
        user: user.id,
        post: postId,
      });
    }
    save.saved = !save.saved;

    await save.save();
    return res.status(200).json({ message: true, saved: save });
  } catch (err) {
    console.log(err);
    return res
      .status(200)
      .json({ message: false, message: "server error about saved" });
  }
};

const getLikes = async (req, res) => {
  const { postId } = req.params;
  // console.log("post Id for get Likes", postId);
  try {
    const Likes = await UserInteraction.find({
      post: req.params.postId,
      liked: true,
      // saved:true,
    }).populate("user", "username , pic");
    return res.status(200).json(Likes);
  } catch (err) {
    console.log(err);
  }
};

const getSave = async (req, res) => {
  const { postId } = req.params;
  // console.log("post Id for get Likes", postId);
  try {
    const save = await UserInteraction.find({
      post: postId,
      saved: true,
      // saved:true,
    }).populate("user", "username , pic");
    return res.status(200).json(save);
  } catch (err) {
    console.log("get save error in controller", err);
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
  toggelLikePost,
  toggelSavePost,
  test,
  getLikes,
  getSave,
};
