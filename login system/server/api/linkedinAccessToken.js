const axios = require("axios");
const linkdinModel = require("../model/linkedin");

//*getTokenAccessUserDataLinkedin & getCodeAccessLinkedin for singin linkedin
const getTokenAccessUserDataLinkedin = async (accessTokenApi) => {
  try {
    //*for singin
    const accessToken = accessTokenApi.data.access_token;
    console.log("response in api:", accessTokenApi);
    console.log("Access token in api:", accessToken);
    //https://api.linkedin.com/v2/me
    const userDataResponse = await axios.get(
      "https://api.linkedin.com/v2/emailAddress?q=members&projection=(elements*(handle~))",
      {
        headers: {
          //*for sigin
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    if (userDataResponse.status === 200) {
      const createLinkedinUserData = await linkdinModel.create({
        token: response.data.access_token,
        email: response[0]["handle~"]?.emailAddress,
      });
      console.log("Sigin Data Response Linkedin : ", userDataResponse.data);
      return createLinkedinUserData;
    }
    console.log("Sigin Data Response Linkedin : ", userDataResponse.data);
  } catch (err) {
    console.error(
      "ERROR IN > api > getTokenAccessUserDataLinkedin function ",
      err
    );
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
      // redirect_uri: "https://loginsystemtest.vercel.app/accessLinkedin", => for online
      redirect_uri: "http://127.0.0.1:5173/accessLinkedin", //=> for local
      // "clinet_address/accessLinkedin",
    });
    const accessTokenApi = await axios.post(
      "https://www.linkedin.com/oauth/v2/accessToken",
      params,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    //*take Token from api then return user infomation linkedin
    const userData = await getTokenAccessUserDataLinkedin(accessTokenApi);
    console.log(
      "LinkedIn user data in api > getCodeAccessLinkedin function:",
      userData
    );

    return response.data;
  } catch (err) {
    console.log(err.response.data.error_description);
    return { error: err.response.data.error_description };
  }
};

//*For Login Linkedin
const LoginLinkedin = async (dataBaseTOken) => {
  try {
    const userDataResponse = await axios.get(
      "https://api.linkedin.com/v2/emailAddress?q=members&projection=(elements*(handle~))",
      {
        headers: {
          Authorization: `Bearer ${dataBaseTOken}`,
        },
      }
    );

    if (userDataResponse.status === 200) {
      console.log("Login response : ", userDataResponse.data);
      return userDataResponse.data;
    }
    console.log(userDataResponse.data, "response data");
    return userDataResponse.data;
  } catch (err) {
    console.error("ERROR IN > api > LoginLikedin function ", err);
    console.error(err?.response?.data, "worng Login Linkedin");
    return err?.response?.data;
  }
};

module.exports = {
  getCodeAccessLinkedin,
  getTokenAccessUserDataLinkedin,
  LoginLinkedin,
};
