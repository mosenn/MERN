const mongoose = require("mongoose");

const linkedinSchema = new mongoose.Schema({
  token: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
  },
  pic: {
    type: String,
  },

  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
});

const linkdinModel = mongoose.model("linkedinToken", linkedinSchema);

module.exports = linkdinModel;
