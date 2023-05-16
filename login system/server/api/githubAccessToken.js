const axios = require("axios");
const clinet_id = process.env.CLIENT_ID;
const clinet_secret = process.env.CLIENT_SECRET;
async function getAccessToken(code) {
  try {
    const access_token_url = "https://github.com/login/oauth/access_token";
    const params = new URLSearchParams({
      client_id: clinet_id,
      client_secret: clinet_secret,
      code: code,
    });

    const response = await axios.post(access_token_url, params, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
        "User-Agent": "register login github react",
      },
    });

    const token = new URLSearchParams(response.data).get("access_token");

    console.log(`it's token in getAccessToken function  :`, token);
    return token;
  } catch (err) {
    console.log(err);
  }
}

module.exports = getAccessToken;
