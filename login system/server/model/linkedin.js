const mongoose = require("mongoose");

const linkedinSchema = new mongoose.Schema({
  token: {
    type: String,
    required: true,
    unique: true,
  },
});

const linkdinModel = mongoose.model("linkedinToken", linkedinSchema);

module.exports = linkdinModel;
