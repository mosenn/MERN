const axios = require("axios");
const linkdinModel = require("../model/linkedin");

const getTokenAccessUserDataLinkedin = async (response) => {
  const accessToken = response.data.access_token;
  console.log("Access token:", accessToken);

  try {
    const userDataResponse = await axios.get("https://api.linkedin.com/v2/me", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (userDataResponse.status === 200) {
      await linkdinModel.create({ token: token.data.access_token });
      console.log(userDataResponse.data, "response data");
      return userDataResponse.data;
    }
  } catch (err) {
    console.error(err?.response?.data, "something went wrong");
    return err?.response?.data;
  }
};
const getCodeAccessLinkedin = async (code) => {
  try {
    const params = new URLSearchParams({
      grant_type: "authorization_code",
      code: code,
      client_id: process.env.CLIENT_ID_LINKEDIN,
      client_secret: process.env.SECRET_LINKEDIN,
      redirect_uri: "http://127.0.0.1:5173/accessLinkedin",
    });
    const response = await axios.post(
      "https://www.linkedin.com/oauth/v2/accessToken",
      params,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    const userData = await getTokenAccessUserDataLinkedin(response);
    console.log("LinkedIn user data:", userData);

    return response.data;
  } catch (err) {
    console.log(err.response.data.error_description);
    return { error: err.response.data.error_description };
  }
};

module.exports = { getCodeAccessLinkedin, getTokenAccessUserDataLinkedin };