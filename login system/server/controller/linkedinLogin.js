const getTokenAccessLinkedin = require("getTokenAccessLinkedin");
const accessTokenLinkedin = async (req, res) => {
  try {
    const code = req.query.code;
    const linkedinToken = await getTokenAccessLinkedin(code);
    return res.json({ linkedinToken });
  } catch (err) {
    console.log(err);
    return res.send(err);
  }
};

module.exports = accessTokenLinkedin;
