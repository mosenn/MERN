const axios = require("axios");

const getTokenAccessLinkedin = async (code) => {
  try {
    // console.log(code, "code in accesslinkedin in middleware");

    const paramas = new URLSearchParams({
      grant_type: "authorization_code",
      code: code,
      client_id: "78go2ars92ov02",
      client_secret: "oxZ9jNZ6w2CFekYj",
      redirect_uri: "http://127.0.0.1:5173/accessLinkedin",
    });
    const token = await axios.post(
      "https://www.linkedin.com/oauth/v2/accessToken",
      paramas,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    console.log(
      token.data.access_token,
      "token in middlware post to api linkedin"
    );
    return token.data.access_token;
  } catch (err) {
    console.log(err.response.data.error_description);
  }
};

module.exports = getTokenAccessLinkedin;
