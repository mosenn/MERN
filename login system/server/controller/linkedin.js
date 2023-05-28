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
      "AQXFdP9uqAvLdfS4blZNLS6wIOyqHNOsBhoTutS4OwGTUUmgDUXaZojF_py7tSXVLpoAQYGt-0S7dYaXC2LOSIU0aYVQgJvCdm78UfOH7Ns_k5UkNu5ZNoljhg9rtBiEKLir2jeKBz5aNnJisDRc1gZrGCOXzIzXwsPAw3UIfzu3gwItsU9yOAYbuVq1c2e7McwXRYZJxRJ5s8bGI4gj9QtKWM-JbeMJCw-7gptvpsYSVxUwlvKKc0-67poae36LsjvX2fI8JbetTtY0Wu3qbo8CLKlUx_cg8IPdtkNIiA6KxvE2VBgI9AIyXSvcixaKw4IwRMKMeKfwGywHZ3zaEJWiZM3uZA"
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
