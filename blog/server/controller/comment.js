const commentModel = require("../model/comment");
const jwt = require("jsonwebtoken");
// const createComment = async (req, res) => {
//   const { comment, postId, author } = req.body;
//   const { userToken } = req.cookies;
//   console.log(postId, "postId");
//   try {
//     if (userToken) {
//       const user = await jwt.verify(userToken, process.env.JWT_SECRET, {});
//       const comments = await commentModel.create({
//         comment,
//         author: user.id,
//         postId,
//         // postId:postId,
//       });
//       return res.status(200).json(comments);
//     }
//   } catch (err) {
//     console.log("Create Comeent Error", err.message);
//     return err;
//   }
// };

// const getCommentsByPost = async (req, res) => {
//   try {
//     const comments = await commentModel
//       .find({ post: postId })
//       .populate("author");
//     // const posts = await postModel.find().populate("author");
//     return res.status(200).json(comments);
//   } catch (err) {
//     console.error("get comment Err", err);
//     return res.status(500).send({ data: err, message: "get comments error" });
//   }
// };

// module.exports = {
//   getCommentsByPost,
//   createComment,
// };

const createComment = async (req, res) => {
  try {
    const { comment, author, postId } = req.body;
    const newComment = new commentModel({ comment, author, post: postId });
    await newComment.save();
    return res.json(newComment);
  } catch (err) {
    console.error(err);
    return res.status(500).send("Server Error");
  }
};

const getCommentsByPost = async (req, res) => {
  console.log(req.params.post);
  try {
    const comments = await commentModel
      .find({ post: req.params.post })
      .populate("author");
    return res.json(comments);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};

module.exports = {
  getCommentsByPost,
  createComment,
};
