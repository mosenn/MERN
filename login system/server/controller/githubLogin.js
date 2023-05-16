const getAccessToken = require("../api/githubAccessToken");

const AccessTokenGithub = async (req, res) => {
  try {
    const code = req.query.code;
    console.log("code : ", code);
    const token = await getAccessToken(code);
    console.log("token in route getAccessToken :", token);
    //* Store the token in the session
    return res.json({ token });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  AccessTokenGithub,
};
