const {
  getCodeAccessLinkedin,
  getTokenAccessUserDataLinkedin,
  LoginLinkedin,
} = require("../api/linkedinAccessToken");
const linkdinModel = require("../model/linkedin");

let likedinToken;
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

// const userDataLinkedin = async (req, res, next) => {
//   try {
//     const Userdata = await getTokenAccessUserDataLinkedin(
//       "AQVaBkqj_w7zIoMoVkyp5VbcWGcCi8qn3V0XoJL3ajMfsr6Wo3EzbIJdNh8IIEwmveUVD1BAh_U3wzQSD0QcrCrdNMF6xfWEmgPK-lktqpEacWltIlO77c8ibCX95Q6Z3bXciJFAK7bjQSIbXQrivvKTCTBy8GuSs8zpWKO6SyjzritKPbNsedXdGyOLU294oCjRy8DU6p-8rd7AjI7LIARGVP-iJ_81J53jUuUeZXCrlO54o4xi6yiBZe9e9jQHttSZXqzM56yzWN2de5OeqDnp9R0gZljpK_4LB85ccc1kozEuZ553Dmm4upHOCEcTP_zbsM9UrgIpYHZZvpJca0zMqRRSPg"
//     );
//     console.log("USERDATA IN FUNC userDataLinkedin", Userdata);
//     // return res.status(200).send(tokenInMongodb);
//     return res.status(200).send(Userdata);
//   } catch (err) {
//     console.log(err.message);
//     return res.status(404).send(err.message);
//   }
// };

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
  } catch (err) {
    console.log("Error from loginLinkedin", err);
    console.log(err.message, "err message for loginlindin controller");
    return res.status(404).send(err);
  }
};
module.exports = { accessTokenLinkedin, /*userDataLinkedin*/ loginLikedin };
