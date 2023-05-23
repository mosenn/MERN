const {
  getCodeAccessLinkedin,
  getTokenAccessUserDataLinkedin,
} = require("../api/linkedinAccessToken");
const linkdinModel = require("../model/linkedin");

let likedinToken;
const accessTokenLinkedin = async (req, res, next) => {
  try {
    const code = req.query.code;
    console.log("CODE in accessToken Linkedin Controller:", code);
    const likedinToken = await getCodeAccessLinkedin(code);
    console.log("likedinToken in Controller>accessTokenLinkedin", likedinToken);
    console.log("likedinToken.access_token in Controller>accessTokenLinkedin", likedinToken.access_token);
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

const userDataLinkedin = async (req, res, next) => {
  try {
    // //*Todo findbyOne Token in mongodb but need first token for this .
    //*find token in db same in token is response
    const tokenInMongodb = await linkdinModel.findOne({
      token: likedinToken.token,
    });
    if (tokenInMongodb) {
      console.log("true token in mongodb");
    }
    //* if status 200 in api most be have both tokens
    console.log("linkedin token in userdataLinkeidn func", likedinToken.token);
    console.log("TOKEN COMING FROM MONGODB", tokenInMongodb.token);
    //* if status 200 in api most be have both tokens
    // console.log(tokenInMongodb, "tokenInMongodb");
    //* pass mongodb token to this function for get user data
    // const Userdata = await getTokenAccessUserDataLinkedin(tokenInMongodb.token);
    const Userdata = await getTokenAccessUserDataLinkedin(likedinToken.token);

    console.log("USERDATA IN FUNC userDataLinkedin", Userdata);
    // return res.status(200).send(tokenInMongodb);
    return res.status(200).send(Userdata);
  } catch (err) {
    console.log(err.message);
    return res.status(404).send(err.message);
  }
};
module.exports = { accessTokenLinkedin, userDataLinkedin };
