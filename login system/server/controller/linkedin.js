const {
  getCodeAccessLinkedin,
  getTokenAccessUserDataLinkedin,
  LoginLinkedin,
} = require("../api/linkedinAccessToken");
const linkdinModel = require("../model/linkedin");

let likedinToken;

//*take code from client pass to api for take token
const accessTokenLinkedin = async (req, res, next) => {
  try {
    const code = req.query.code;
    // console.log("CODE in accessToken Linkedin Controller:", code);
    const likedinToken = await getCodeAccessLinkedin(code);
    // console.log("likedinToken in Controller>accessTokenLinkedin", likedinToken);
    console.log(
      "likedinToken.access_token in Controller>accessTokenLinkedin",
      likedinToken.access_token
    );
    return res.status(200).json(likedinToken.access_token);
  } catch (err) {
    console.log(
      "ERROR FOR LINKEDIN IN Controller>accessTokenLinkedin function",
      err
    );
    console.log(err.response, "err in controller");
    return res.status(400).send(err);
  }
};

//*for test
const userDataLinkedin = async (req, res, next) => {
  try {
    const Userdata = await getTokenAccessUserDataLinkedin(
      "AQWhOZSi9c8HUDkkjBE7IcbUJ3a1JVvlqERhS4eJRTHS8vRhTLkUs3N-OlOxYgHyAyBvoXH6ljVdBwj-WAoZjvGS_7rvZiEiOANl73zxOS9pJ5sGpLnyzRb6ZgHu0BAYUbusE6CNqJ3v158gWG9ECsKBz5xCXubbk3kN_7EH4dkGSjk5BucLLxxNK3n2rEYXXyA3_Twbjmiw454YUr8XvxrZtRcl--UhEfpuKoDePiTarpdovKE3KEQYGEGWTeja32K_tHtEwyoymdduS4mSc7_dbzvkOgtk9K6ieOKbHquCklZPeNUA6w7DR7-n0ev8IW0SXMRzsWa8OwKBZ-qsTJvQ79mePg"
    );
    console.log("USERDATA IN FUNC userDataLinkedin", Userdata.data);
    // return res.status(200).send(tokenInMongodb);
    return res.status(200).json(Userdata);
  } catch (err) {
    console.log(err.message);
    return res.status(404).send(err.message);
  }
};
//*for test

//*login likedin
const loginLikedin = async (req, res) => {
  try {
    const email = req.body.email;
    const userDataLikedin = await linkdinModel.findOne({ email });
    //*for pass token from data base for login
    await LoginLinkedin(userDataLikedin.token);
    if (userDataLikedin) {
      return res.status(200).send(userDataLikedin);
    }
    if (!userDataLikedin) {
      throw "you are not log in with this email";
    }
  } catch (err) {
    console.log("Error from loginLinkedin", err);
    console.log(err.message, "err message for loginlindin controller");
    return res.status(404).send([err.message ,"you are not log in with this email"]);
  }
};
module.exports = { accessTokenLinkedin, userDataLinkedin, loginLikedin };
