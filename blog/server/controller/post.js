const jwt = require("jsonwebtoken");
const postModel = require("../model/post");

const createPost = async (req, res) => {
  // const { content, title, summery, cover } = req.body;
  try {
    const { userToken } = req.cookies;
    if (userToken) {
      const user = await jwt.verify(userToken, process.env.JWT_SECRET, {});
      const { content, title, summery, cover } = req.body;
      // console.log(content);
      // console.log(title);
      // console.log(summery);
      // console.log(cover);
      const post = await postModel.create({
        content,
        title,
        summery,
        cover,
        author: user.id,
      });
      return res.status(201).json({ data: post, message: "post is create" });
    }
  } catch (err) {
    console.log("Create Post", err);
    return err;
  }
};

//* Get All Post
const posts = async (req, res) => {
  try {
    const posts = await postModel.find().populate("author");
    return res.status(200).json(posts);
  } catch (err) {
    console.log("All Post Err", err);
  }
};

//* Get author post
const userPost = async (req, res) => {
  const { userToken } = req.cookies;
  try {
    console.log("User Token", userToken);
    if (userToken) {
      const user = await jwt.verify(userToken, process.env.JWT_SECRET, {});
      const userPost = await postModel.find({ author: user.id });
      return res.status(200).json(userPost);
    }
  } catch (err) {
    console.log("User Post Error", userPost);
    return err;
  }
};
//* Delete Post
const deleteUserPost = async (req, res) => {
  const id = req.params.id;
  console.log("ID", id);
  const { userToken } = req.cookies;
  try {
    if (userToken) {
      const userPost = await postModel.findByIdAndRemove(req.params.id);
      if (!userPost) {
        return res.status(404).json("this post is not exist");
      }
      return res.status(200).json(userPost);
    }
  } catch (err) {
    console.log("Delete Post Error", err);
  }
};
module.exports = {
  createPost,
  posts,
  userPost,
  deleteUserPost,
};
