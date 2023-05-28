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
      "AQWnaOZ10vIuPjBi2ola0Et2xuRLLwMn3nlVSr6ESx7bUPhtFLc6OFmJoP6K1iFQ_X_BkbLnI0vuxS1ik7NssRd59W9dWb_HIQ5gk6viGWGkf9VVEbUKIdBo8p19IC-jT0kzbRWEwy7sCNySaZsFSSJsaGe4oS3-Ih8qS10XVefA4YoKaFrJWG7ct1vOoDWqakY_qA1RzTfyO7SisYYdreol8wnz7dcS1XSF_o7lrruMn7oKFpV06QZGXlHNac1dUMthGNHsmU4opfT_a8icYzzsmHUCWUWrYxjxARfxdd6i70WvwHGhk2Pz92G28mZV1OZFoqckIhkQyE6kSogv_XOlL-fm3Q"
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
