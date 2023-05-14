const axios = require("axios");
const googleRecapcha = async (req, res) => {
  const secretKey = "6LfgVQcmAAAAAHFOWGovWdCcFZwuvKXSeNRwK2AD";
  try {
    const token = await req.body.googleRecapchaToken;
    // console.log(token, "token google recapcha token in _api");
    // console.log("token google recapcha token in _api", token);
    const response = await axios.post(
      `https://google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`
    );
    console.log(response.data);
    return res.send(response.data);
    // if (response.data.success) {
    //   return res.send("Human 👨 👩");
    // } else {
    //   return res.send("Robot 🤖");
    // }
  } catch (err) {
    return res.send(err);
  }
};

module.exports = googleRecapcha;
