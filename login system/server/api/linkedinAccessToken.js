const axios = require("axios");
const linkdinModel = require("../model/linkedin");

//*getTokenAccessUserDataLinkedin & getCodeAccessLinkedin for singin linkedin
let urls = [
  "https://api.linkedin.com/v2/me",
  "https://api.linkedin.com/v2/emailAddress?q=members&projection=(elements*(handle~))",
];

const getTokenAccessUserDataLinkedin = async (accessTokenApi) => {
  try {
    //*for  online
    const accessToken = accessTokenApi.data.access_token;
    console.log("response in api:", accessTokenApi);
    console.log("Access token in api:", accessToken);
    //*for  online
    // https://api.linkedin.com/v2/people/(id:{person ID})
    // https://api.linkedin.com/v2/me
    // https://api.linkedin.com/v2/me?projection=(id,profilePicture(displayImage~:playableStreams))
    // "https://api.linkedin.com/v2/emailAddress?q=members&projection=(elements*(handle~))",
    // https://api.linkedin.com/v2/me?projection=(id,firstName,lastName,profilePicture(displayImage~:playableStreams))&oauth2_access_token=YOUR_ACCESS_TOKEN_HERE

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

    // const userDataResponse = await axios.get(
    //   [
    //     "https://api.linkedin.com/v2/me",
    //     "https://api.linkedin.com/v2/emailAddress?q=members&projection=(elements*(handle~))",
    //   ],
    //   {
    //     headers: {
    //       //*for online
    //       Authorization: `Bearer ${accessTokenApi}`,
    //     },
    //   }
    // );

    if (responses[0].status === 200) {
      console.log("Sigin status: ", responses[0].status);
      const [userProfileApi, emailApi] = responses;

      console.log("Profile user linkedin Sigin :", userProfileApi?.data);
      console.log(
        "Email user Linkedin :",
        emailApi?.data?.elements[0]["handle~"].emailAddress
      );
      console.log(
        "pic prfoile",
        userProfileApi?.data?.profilePicture?.displayImage
      );
      console.log("Email user  :", emailApi?.data);
      // return [userProfileApi?.data, emailApi?.data];
      //*for sigin
      const createLinkedinUserData = await linkdinModel.create({
        token: accessTokenApi,
        email: emailApi?.data.elements[0]["handle~"].emailAddress,
        pic: userProfileApi?.data.profilePicture.displayImage,
      });
      //*for sigin
      //*for sigin
      return createLinkedinUserData;
      //*for sigin
      // return userDataResponse.data;
    }
    // console.log("Sigin Data Response Linkedin : ", userDataResponse.data);
  } catch (err) {
    console.error(
      "ERROR IN > api > getTokenAccessUserDataLinkedin function ",
      err
    );
    // console.error(err?.response?.data, "something went wrong");
    // // return err?.response?.data;
  }
};

const getCodeAccessLinkedin = async (code) => {
  try {
    const params = new URLSearchParams({
      grant_type: "authorization_code",
      code: code,
      client_id: process.env.CLIENT_ID_LINKEDIN,
      client_secret: process.env.SECRET_LINKEDIN,
      redirect_uri: "https://loginsystemtest.vercel.app/accessLinkedin", //=> for online
      // redirect_uri: "http://127.0.0.1:5173/accessLinkedin", //=> for local
      // "clinet_address/accessLinkedin",
      // scope: ["r_emailaddress", "r_liteprofile"],
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
    const userData = await getTokenAccessUserDataLinkedin(accessTokenApi);
    //*for sigin online
    // const userData = await getTokenAccessUserDataLinkedin(
    //   "AQX0i61Ko6eFO8kXEJCLzYQTqDWAeuHSFcIZbnAjNCat-dNH3044-a8dU013dadpBU1DoAFueHXJA7IcM1KJfH78RV6UmUtzwQmDvSCoMd-9fgYswFgEbnXuAE-JWmkjM7NYUBR9Exz8bhA9SeH4afKB-ZvbISL0iX_bMgrRb6kYZhTtYI6fuUT540Iwka6_yhp6mxGM5mqX7ibrqVGgcUWp70HSm_lsBVE_69OjFA0R34ZsXfrXJRGmq0egB4NbQo-DsYkDgWfqFx-HTTjVwWhzVzkxSVTAsfxSypr8FLVVJLymwP5Ds8YgAi6FdUVap3UKr34dggnosZcLFjKWR_M9IE80zw"
    // );
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
