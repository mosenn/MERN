const {
  getCodeAccessLinkedin,
  getTokenAccessUserDataLinkedin,
  LoginLinkedin,
} = require("../api/linkedinAccessToken");
const linkdinModel = require("../model/linkedin");

// let likedinToken = [];

//*take code from client pass to api for take token
const accessTokenLinkedin = async (req, res, next) => {
  try {
    const code = req.query.code;
    // console.log("CODE in accessToken Linkedin Controller:", code);
    const token = await getCodeAccessLinkedin(code);
    // console.log("token before push", token);
    // likedinToken.push(token);
    // // console.log("likedinToken in Controller>accessTokenLinkedin", likedinToken);
    // // console.log(
    // //   "likedinToken.access_token in Controller>accessTokenLinkedin",
    // //   likedinToken.access_token
    // // );
    const userData = await linkdinModel.findOne({ token: token.access_token });
    return res.status(200).json(userData);
  } catch (err) {
    console.log(err, 'this err from')
    return res.status(401).send(err);
  }
};

//*for siginLinkedin return data to clinet
const signinLinkedin = async (req, res, next) => {
  try {
    console.log("likedinToken in siginLinkedin", likedinToken);
    // const Userdata = await getTokenAccessUserDataLinkedin(
    //   likedinToken.access_token
    // );

    console.log("likedinToken in siginLinkedin", likedinToken);
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
