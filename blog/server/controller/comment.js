const commentModel = require("../model/comment");
//* this work but i want edit
const createComment = async (req, res) => {
  try {
    const { comment, author, postId } = req.body;
    // const newComment = new commentModel({ comment, author, post: postId });
    // await newComment.save();
    const newComment = await commentModel.create({
      comment,
      author,
      post: postId,
    });
    return res.json(newComment);
  } catch (err) {
    console.error(err);
    return res.status(500).send("Server Error");
  }
};
//* this work but i want edit
const getCommentsByPost = async (req, res) => {
  // console.log("postId for Comment", req.params.postId);
  try {
    if (req.params.postId && req.params.postId.trim().length > 0) {
      const comments = await commentModel
        .find({ post: req.params.postId })
        .populate("author");
      return res.json(comments);
    }

    // console.log(comments, "comments");
  } catch (err) {
    console.error("Get Comments Error", err);
    res.status(500).send("Server Error");
  }
};

module.exports = {
  getCommentsByPost,
  createComment,
};
