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
      "AQUgbprzNkINIQQrmV8IZe9HEcW87B6H_NWsbmf9ufbjE25FJ0HMCYTlYOeakXxDmZOXMp0tpZrCPhdgIjQ2ZlhHrhWxoQeEPlLVBpLqhMkFIMxW1smuhgNLOI4rGmjFcXEW38HTUkFQcrcZ9st8OxjeDbLeAowuEI9GQPtBVuVFVi8sGznzlAZy5E8f14dD7tjMKGWQ6lmRzuUZf9y-nrwHk6OJKxQDQNn3c5iFBfsYyPU5eULcPU7Eyj-xPG1XYvfnw_CFTT_uZs_fYaUXZTNG4995jCQb33AirbHVHK5EonWQl6pFXSrabv4lqkJpVhZz3SW7dwxxtwEzymdyMpECJH9Iqw"
    );
    // console.log("profile in signinLinkedin", Userdata?.userProfile);
    // console.log(" Email in signinLinkedin", Userdata?.userEmail);
    // return res.status(200).send(tokenInMongodb);
    console.log("user data ", Userdata);
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
