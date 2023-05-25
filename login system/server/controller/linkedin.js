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
// const userDataLinkedin = async (req, res, next) => {
//   try {
//     const Userdata = await getTokenAccessUserDataLinkedin(
//       "AQX0i61Ko6eFO8kXEJCLzYQTqDWAeuHSFcIZbnAjNCat-dNH3044-a8dU013dadpBU1DoAFueHXJA7IcM1KJfH78RV6UmUtzwQmDvSCoMd-9fgYswFgEbnXuAE-JWmkjM7NYUBR9Exz8bhA9SeH4afKB-ZvbISL0iX_bMgrRb6kYZhTtYI6fuUT540Iwka6_yhp6mxGM5mqX7ibrqVGgcUWp70HSm_lsBVE_69OjFA0R34ZsXfrXJRGmq0egB4NbQo-DsYkDgWfqFx-HTTjVwWhzVzkxSVTAsfxSypr8FLVVJLymwP5Ds8YgAi6FdUVap3UKr34dggnosZcLFjKWR_M9IE80zw"
//     );
//     console.log("USERDATA IN FUNC userDataLinkedin", Userdata);
//     // return res.status(200).send(tokenInMongodb);
//     return res.status(200).json(Userdata);
//   } catch (err) {
//     console.log(err.message);
//     return res.status(404).send(err);
//   }
// };
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
    return res
      .status(404)
      .send([err.message, "you are not log in with this email"]);
  }
};
module.exports = { accessTokenLinkedin, /*userDataLinkedin*/ loginLikedin };
