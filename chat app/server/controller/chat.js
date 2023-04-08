const Chat = require("../models/chat");
const User = require("../models/user");

const accessChat = async (req, res) => {
  const { userId } = req.body;
  console.log(req.body);
  if (!userId) {
    console.log("user id param not send with requset");
    return res.sendStatus(400);
  }
  var isChat = await Chat.find({
    isGroupChat: false,
    $and: [
      { users: { $elemMatch: { $eq: req.user._id } } },

      { users: { $elemMatch: { $eq: userId } } },
    ],
  })
    .populate("users", "-password")
    .populate("latestMessage");
  isChat = await User.populate(isChat, {
    path: "latesMessage.sender",
    slecet: "name pic email",
  });
  if (isChat.length > 0) {
    res.send(isChat[0]);
  } else {
    var chatDAta = {
      chatName: "sender",
      isGroupChat: false,
      users: [req.user._id, userId],
    };
  }
  try {
    const createdChat = await Chat.create(chatDAta);
    const fullChat = await Chat.findOne({
      _id: createdChat._id,
    }).populate("users", "-password");
    res.status(200).send(fullChat);
  } catch (err) {
    res.status(400);
    throw new Error(err);
  }
};

const usersChat = async (req, res) => {
  try {
    const chat = await Chat.find({
      users: { $elemMatch: { $eq: req.user._id } },
    })
      .populate("users", "-password")
      .populate("groupAdmin", "-password")
      .populate("latestMessage")
      .sort({ updateAt: -1 })
      .then(async (result) => {
        result = await User.populate(result, {
          path: "latestMessage.sender",
          select: "name pic email",
        });
        res.status(200).send(result);
      });
    // res.status(200).send(chat);
  } catch (err) {}
};

module.exports = { usersChat, accessChat };
