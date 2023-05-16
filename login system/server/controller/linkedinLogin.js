const { getCodeAccessLinkedin } = require("../api/linkedinAccessToken");

const accessTokenLinkedin = async (req, res) => {
  try {
    const code = req.query.code;
    console.log("CODE:", code);
    const data = await getCodeAccessLinkedin(code);
    console.log("Token in controller:", data.token);
  } catch (err) {
    console.log(err.response, "err in controller");
    return res.status(400).send(err);
  }
};

module.exports = { accessTokenLinkedin };
