const Messagemodel = require("../model/Message");

const userMessage = async (req, res) => {
  try {
    const message = await Messagemodel.find();
    return res.status(200).json(req.params);
  } catch (err) {
    return res.status(400).send(err);
  }
};

module.exports = {
  userMessage,
};
