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
    likedinToken = await getCodeAccessLinkedin(code);
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

//*for siginLinkedin return data to clinet
const signinLinkedin = async (req, res, next) => {
  try {
    // console.log("likedinToken in siginLinkedin", likedinToken);
    const Userdata = await getTokenAccessUserDataLinkedin(
      "AQVmmNThGRF2MD6-ds1HZxM5T-lKrgmkM89GVYjGNU60tIV-3KpWd12Prq9PhBKqNANo04E3cMc0TiqyOJquNUoRZ2C6pl-TdABdTf90HKMGbhSl4wzpOCm5uSAwQ3JVLe33xDwD9zjPIHjuxSBMxCkqB38oeQTZFG9uLdzxitI4uVxfCgqSvcKYeXVYLc1aV9pOdYweRQ6yIgMBGucmD5ZOXsKQTrpfJs1TAvhATm9vfjRcYeK-_apXSnVvxrHbbc9zFl-KORYOeQ3PD6Y8IxUx8AxssD6UKhmDRv_codrXQLi8enOPgSEBmn_rfWGeBj-lu9IgRuOL2h8ZG1tAKmRofFNuBA"
    );
    console.log("profile in signinLinkedin", Userdata?.userProfile);
    console.log(" Email in signinLinkedin", Userdata?.userEmail);
    // return res.status(200).send(tokenInMongodb);
    return res.status(200).send({
      userPrfoile: Userdata?.userProfile,
      userEmail: Userdata?.userEmail,
    });
  } catch (err) {
    console.log("siginLinkedin :", err.message);
    return res.status(401).send({ error: err.message });
  }
};

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
    return res
      .status(404)
      .send([err.message, "you are not log in with this email"]);
  }
};
module.exports = { accessTokenLinkedin, signinLinkedin, loginLikedin };
