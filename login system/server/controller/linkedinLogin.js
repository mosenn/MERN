const getTokenAccessLinkedin = require("../middleware/linkedinAccessToken");
const accessTokenLinkedin = async (req, res) => {
  try {
    const code = req.query.code;
    // console.log("code in controller linkedin", code);
    const linkedinToken = await getTokenAccessLinkedin(code);
    return res.send(linkedinToken);
  } catch (err) {
    console.log(err);
    return res.send(err.data, "in controller");
  }
};

module.exports = accessTokenLinkedin;
