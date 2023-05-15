const axios = require("axios");

const getTokenAccessLinkedin = async (code) => {
  try {
    const paramas = new URLSearchParams({
      code: code,
      client_id: "78go2ars92ov02",
      client_secret: "oxZ9jNZ6w2CFekYj",
      redirect_uri: "",
    });
    const token = await axios.post(
      "https://www.linkedin.com/oauth/v2/accessToken",
      paramas,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          grant_type: "authorization_code",
        },
      }
    );
    return token;
  } catch (err) {
    console.log(err);
  }
};

module.exports = getTokenAccessLinkedin;
