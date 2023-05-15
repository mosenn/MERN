const getTokenAccessLinkedin = require("../middleware/linkedinAccessToken");
const accessTokenLinkedin = async (req, res) => {
  try {
    const code = req.query.code;
    // console.log("code in controller linkedin", code);
    const linkedinToken = await getTokenAccessLinkedin(code);
    return res.status(200).json({linkedinToken});
  } catch (err) {
    console.log(err , 'err in controller');
    return res.status(400).send(err);
  }
};

module.exports = accessTokenLinkedin;
