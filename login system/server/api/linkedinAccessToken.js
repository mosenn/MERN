const axios = require("axios");
const { userDataLinkedin } = require("../controller/linkedinLogin");

//* code for function take user data
const getTokenAccessUserDataLinkedin = async (token) => {
  console.log("TOKEN IN CHATGPT FUNCTION :", token); //* have token here

  console.log("true token here");
  try {
    // https://api.linkedin.com/v2/me?projection=(id,firstName,lastName,profilePicture(displayImage~:playableStreams))
    // https://api.linkedin.com/v2/me
    const response = await axios.get(
      "https://api.linkedin.com/v2/me?projection=(id,firstName,lastName,profilePicture(displayImage~:playableStreams))",
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    if (response.status === 200) {
      //* two here call model.create for save token to mongodb
      console.log(response.data, "response data");
      return response.data;
    }
  } catch (err) {
    return err?.response?.data;
    console.error(err?.response?.data, "something went wrong");
    // return err?.response?.data;
  }
};

//* take code and return response token
const getCodeAccessLinkedin = async (code) => {
  try {
    // console.log(code, "code in accesslinkedin in middleware");
    const paramas = new URLSearchParams({
      grant_type: "authorization_code",
      code: code,
      client_id: process.env.CLIENT_ID_LINKEDIN,
      client_secret: process.env.SECRET_LINKEDIN,
      redirect_uri: "http://127.0.0.1:5173/accessLinkedin",
    });
    const token = await axios.post(
      "https://www.linkedin.com/oauth/v2/accessToken",
      paramas,
      {
        // method: "post",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    //* first here call model.create for save token to mongodb
    getTokenAccessUserDataLinkedin(token.data.access_token);

    console.log("Take Code return Token in api:", token.data);
    return { token: token.data.access_token };
  } catch (err) {
    console.log(err.response.data.error_description);
    return { error: err.response.data.error_description };
  }
};

module.exports = { getCodeAccessLinkedin, getTokenAccessUserDataLinkedin };
