const {
  getCodeAccessLinkedin,
  getTokenAccessUserDataLinkedin,
} = require("../api/linkedinAccessToken");
const linkdinModel = require("../model/linkedin");

let likedinToken;
const accessTokenLinkedin = async (req, res, next) => {
  try {
    code = req.query.code;
    console.log("CODE in accessToken Linkedin Controller:", code);
    likedinToken = await getCodeAccessLinkedin(code);

    return res.status(200).json(likedinToken);
  } catch (err) {
    console.log(err.response, "err in controller");
    return res.status(400).send(err);
  }
};

const userDataLinkedin = async (req, res, next) => {
  try {
    // console.log(code, "CODE in userDataLinkedin function");
    // //*Todo findbyOne Token in mongodb but need first token for this .
    // const data = await getCodeAccessLinkedin(code);
    // // console.log(linkedinToken);
    const tokenInMongodb = await linkdinModel.findOne({
      token: likedinToken.token,
    });
    // console.log(tokenInMongodb, "tokenInMongodb");
    // const Userdata = await getTokenAccessUserDataLinkedin(tokenInMongodb.token);
    console.log("linkedin token in userdataLinkeidn func", likedinToken.token);
    console.log("TOKEN COMING FROM MONGODB", tokenInMongodb.token);
    // return res.status(200).send(tokenInMongodb);
    return res.status(200).send(tokenInMongodb.token);
  } catch (err) {
    console.log(err.message);
    return res.status(400).send(err.message);
  }
};
module.exports = { accessTokenLinkedin, userDataLinkedin };

//this token give me result in post man most be set to function getTokenAccessUserDataLinkedin()
// "AQU8WE-bPPEIiLlS0y6jdTk_ogakc_ueVUrdEz6tO88Zuo2R5Zag66_sra02Ekf8MoeCevzhV2PvaBysAgwCQZPvK7U3bdzOBsOG9CfeNmdEg5CFpARk7Dt5i81JVYrUvxVZ8jCIBfhnHiTp_j00JjUVRTsRE_6W0lH4Z_BGHiNkE__ivz2w6wgjm2cZS58BtfE43Oys-xdKhF9VJ4U_M423CNRXqyG3DU9PsQeWtTRURMjAROV8m-jcyspJDMiKK2czj7uH485nuLoqeLAlWRV2iUhZLk4NdC8iXo3YzdhJHTSCXg3fJFAwaYklY12kE-XzLyyP3ysxwoAJyOL65J1x3KBr-g"
