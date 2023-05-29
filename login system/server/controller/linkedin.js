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
      "AQWpewwSKlWRP1RQSsA5xf4MsKpGswnF7n3KwAVlhfifSuS_hzcAJWsHkOg1J58OhyGUcZV36jtzxDJdIsp7-TCSEduekJjCM2jA0oa0fVYVpmUuVv7LFUu6-xU_NDcY91hQ7shdYfLIFs_lZ96RO6Glqrtb-69A1pznFS4Y8fDRce_qIfP3zc53nNNvme7YwqIeTNTNQijygI9Li3_smpW1d-J75W3BrN3YWVydn8XFsxFcMBUjRPyJcu8xUSbH45c7fm8g_b9-GOWT_J2r3U-UJG4R40gpvv0uQ_04YSqCI3sSwiAc638G126uPKI9rmoSScxD4Dsx2X_lsa5I-eQZ3my-TA"
    );
    // console.log("profile in signinLinkedin", Userdata?.userProfile);
    // console.log(" Email in signinLinkedin", Userdata?.userEmail);
    // return res.status(200).send(tokenInMongodb);
    // console.log("user data ", Userdata);
    return res.status(200).send(Userdata);
    // return res.status(200).send({
    //   userPrfoile: Userdata?.userProfile,
    //   userEmail: Userdata?.userEmail,
    //   userImage: Userdata?.userImage,
    // });
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
    console.log("userDataLikedin login linkedin api ", userDataLikedin);
    //*for pass token from data base for login
    //*for online
    // await LoginLinkedin(userDataLikedin.token);
     //*for online
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
