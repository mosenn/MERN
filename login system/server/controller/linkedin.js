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
    // console.log(
    //   "likedinToken.access_token in Controller>accessTokenLinkedin",
    //   likedinToken.access_token
    // );
    // console.log("accessTokenLinkedin>controller" , likedinToken)
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
    //*Todo find data base take user and pass to clinet ,
    console.log("likedinToken in siginLinkedin", likedinToken);
    //*this old , work is perfect but i want save just one time user to db
    // const Userdata = await getTokenAccessUserDataLinkedin(
    //   "AQWAonxr8ysVoFECafxrzSexcKTwqjV8-C8cwVEOgVCGI36qPOXOWSkHUFc_0IfWzvsghhdJ5A9XdFwRAoGTm-5KSxbKU_DgUp8JN6neGnzB0UEEMsikAtfpXkccX8Pmi-dPihxHWUvVfaX6mdDgKV_lm5gJDMZ3aLNP7KGRZRFRkj5edl9gOh1SNzpnSnpiH8rFbhnWAcD6YJi18S79M8tW9YKsIeApYt12soFcuzR9wsOUkpasEWZ3RUfmKumkm2NdUSQ1_edl2n-bM0HFE_ElDuyBlLxLdJQLrJkTxCAZ5WQYmPUylJcs9QKWs9Kcax4Tc6TLAp8_-BA5wpNA4J3txnIX4w"
    // );

    //*this old , work is perfect but i want save just one time user to db
    const userData = await linkdinModel.findOne({
      token: likedinToken.access_token,
    });
    if (userData) {
      console.log("user data here true");
    }
    return res.status(200).send(userData);
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
