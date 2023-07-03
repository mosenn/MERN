const commentModel = require("../model/comment");

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
      .find({ postId: req.params.post })
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
