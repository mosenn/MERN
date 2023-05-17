const {
  getCodeAccessLinkedin,
  getTokenAccessUserDataLinkedin,
} = require("../api/linkedinAccessToken");

const accessTokenLinkedin = async (req, res) => {
  try {
    const code = req.query.code;
    // console.log("CODE:", code);
    const data = await getCodeAccessLinkedin(code);
    return data;
    // console.log("Token in controller:", data.token);
  } catch (err) {
    console.log(err.response, "err in controller");
    return res.status(400).send(err);
  }
};

const userDataLinkedin = async (req, res, next) => {
  try {
    const data = await getTokenAccessUserDataLinkedin(
      "AQU8WE-bPPEIiLlS0y6jdTk_ogakc_ueVUrdEz6tO88Zuo2R5Zag66_sra02Ekf8MoeCevzhV2PvaBysAgwCQZPvK7U3bdzOBsOG9CfeNmdEg5CFpARk7Dt5i81JVYrUvxVZ8jCIBfhnHiTp_j00JjUVRTsRE_6W0lH4Z_BGHiNkE__ivz2w6wgjm2cZS58BtfE43Oys-xdKhF9VJ4U_M423CNRXqyG3DU9PsQeWtTRURMjAROV8m-jcyspJDMiKK2czj7uH485nuLoqeLAlWRV2iUhZLk4NdC8iXo3YzdhJHTSCXg3fJFAwaYklY12kE-XzLyyP3ysxwoAJyOL65J1x3KBr-g"
    );

    console.log(data, "user data linkedin in controller");
    return res.status(200).json(data);
  } catch (err) {
    console.log(err.message);
    return res.status(400).send(err);
  }
};
module.exports = { accessTokenLinkedin, userDataLinkedin };
