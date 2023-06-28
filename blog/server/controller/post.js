const jwt = require("jsonwebtoken");

const postModel = require("../model/post");

const createPost = async (req, res) => {
  const { content, title, summery, cover } = req.body;
  try {
    const { userToken } = req.cookies;
    if (userToken) {
      const user = await jwt.verify(userToken, process.env.JWT_SECRET, {});
      const { content, title, summery, cover } = req.body;
      console.log(content);
      console.log(title);
      console.log(summery);
      console.log(cover);
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

const posts = async (req, res) => {
  try {
    const posts =  await postModel.find().populate('author')
    return res.status(200).json(posts);
  } catch (err) {
    console.log("All Post Err", err);
  }
};
module.exports = {
  createPost,
  posts,
};
