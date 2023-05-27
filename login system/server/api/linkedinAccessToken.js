const axios = require("axios");
const linkdinModel = require("../model/linkedin");

//*getTokenAccessUserDataLinkedin & getCodeAccessLinkedin for singin linkedin
// https://api.linkedin.com/v2/me?projection=(id,profilePicture(displayImage~:playableStreams))
let urls = [
  "https://api.linkedin.com/v2/me?projection=(id,profilePicture(displayImage~:playableStreams))",
  "https://api.linkedin.com/v2/me",
  "https://api.linkedin.com/v2/emailAddress?q=members&projection=(elements*(handle~))",
];

const getTokenAccessUserDataLinkedin = async (accessTokenApi) => {
  try {
    //*for  online
    // const accessToken = accessTokenApi.data.access_token;
    // console.log("response in api:", accessTokenApi);
    // console.log("Access token in api:", accessToken);
    //*for  online
    const responses = await Promise.all(
      urls.map((url) =>
        axios.get(url, {
          headers: {
            //*for online
            Authorization: `Bearer ${accessTokenApi}`,
          },
        })
      )
    );
    if (responses[0].status === 200) {
      console.log("Sigin status: ", responses[0].status);
      const [userImage, userProfileApi, emailApi] = responses;

      // console.log("Profile user linkedin Sigin :", userProfileApi?.data);
      // console.log(
      //   "Email user Linkedin :",
      //   emailApi?.data?.elements[0]["handle~"].emailAddress
      // );
      // console.log("user image ", userImage?.data);
      // console.log("Email user  :", emailApi?.data);
      // return [userProfileApi?.data, emailApi?.data];
      //*for sigin
      const createLinkedinUserData = await linkdinModel.create({
        token: accessTokenApi,
        email: emailApi?.data?.elements[0]["handle~"]?.emailAddress,
        // userProfile: userProfileApi?.data,
        firstName: userProfileApi?.data?.localizedFirstName,
        lastName: userProfileApi?.data?.localizedLastName,
        pic: userImage?.data?.profilePicture["displayImage~"]?.elements[0]
          ?.identifiers[0]?.identifier,
      });
      //*for sigin
      //*for sigin
      console.log("create", createLinkedinUserData);
      return createLinkedinUserData;
      //*for sigin
      // return {
      //   userImage: userImage.data,
      //   userProfile: userProfileApi.data,
      //   userEmail: emailApi.data,
      // };
    }
    // console.log("Sigin Data Response Linkedin : ", userDataResponse.data);
  } catch (err) {
    console.log(
      "ERROR IN > api > getTokenAccessUserDataLinkedin function ",
      err?.response?.data
    );
    throw err;
    // return err?.response?.data;
  }
};

const getCodeAccessLinkedin = async (code) => {
  try {
    const params = new URLSearchParams({
      grant_type: "authorization_code",
      code: code,
      client_id: process.env.CLIENT_ID_LINKEDIN,
      client_secret: process.env.SECRET_LINKEDIN,
      // redirect_uri: "https://loginsystemtest.vercel.app/accessLinkedin", //=> for online
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
    //*for sigin online
    // const userData = await getTokenAccessUserDataLinkedin(accessTokenApi);
    //*for sigin online
    const userData = await getTokenAccessUserDataLinkedin(
      "AQUgbprzNkINIQQrmV8IZe9HEcW87B6H_NWsbmf9ufbjE25FJ0HMCYTlYOeakXxDmZOXMp0tpZrCPhdgIjQ2ZlhHrhWxoQeEPlLVBpLqhMkFIMxW1smuhgNLOI4rGmjFcXEW38HTUkFQcrcZ9st8OxjeDbLeAowuEI9GQPtBVuVFVi8sGznzlAZy5E8f14dD7tjMKGWQ6lmRzuUZf9y-nrwHk6OJKxQDQNn3c5iFBfsYyPU5eULcPU7Eyj-xPG1XYvfnw_CFTT_uZs_fYaUXZTNG4995jCQb33AirbHVHK5EonWQl6pFXSrabv4lqkJpVhZz3SW7dwxxtwEzymdyMpECJH9Iqw"
    );
    console.log(
      "LinkedIn user data in api > getCodeAccessLinkedin function:",
      userData
    );

    return accessTokenApi?.data;
  } catch (err) {
    console.log(err.accessTokenApi?.data.error_description);
    return { error: err.accessTokenApi?.data.error_description };
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
