const express = require("express");
const app = express();
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json("server is runing");
});

const clinet_id = process.env.CLIENT_ID;
const clinet_secret = process.env.CLIENT_SECRET;
const Ridirect_URL = `https://github.com/login/oauth/authorize?client_id=373605aaa0df2e4fecde`;
// const access_token_url = "https://github.com/login/oauth/access_token";
// new URLSearchParams
console.log(clinet_id, clinet_secret);

// app.get("/login/github", (req, res) => {
//   return res.redirect(Ridirect_URL);
// });

async function getAccessToken(code) {
  try {
    const access_token_url = "https://github.com/login/oauth/access_token";
    const params = new URLSearchParams({
      client_id: clinet_id,
      client_secret: clinet_secret,
      code: code,
    });

    const response = await axios.post(access_token_url, params, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
        "User-Agent": "register login github react",
      },
    });
    console.log(response, "response");
    const token = new URLSearchParams(response.data).get("access_token");

    console.log(`it's token :`, token);
    return token;
  } catch (err) {
    console.log(err);
  }
}

app.get("/getAccessToken", async (req, res) => {
  try {
    const code = req.query.code;
    console.log("code : ", code);
    const token = await getAccessToken(code);
    console.log("token :", token);
    return res.json({ token });
  } catch (err) {
    console.log(err, "err");
  }
});

//* get user data login

app.get("/getUserData", async (req, res) => {
  try {
    req.get("Authorization"); //Bearer token
    const userData = await axios.get("https://api.github.com/user", {
      headers: {
        Authorization: req.get("Authorization"),
      },
    });
    console.log("userData", userData);
    return res.status(200).send(userData);
  } catch (err) {
    console.log(err, "err");
  }
});

// app.get("/login/github/callback", async (req, res) => {
//   try {
//     const code = req.query.code;
//     const token = await getAccessToken(code);
//     console.log(`it's code :`, code);
//     res.send({ token });
//   } catch (err) {
//     console.log(err, "err");
//   }
// });

// app.get("/access", async (req, res) => {
//   return res.send({ token });
// });
const port = 3000 || process.env.PORT;
app.listen(port, () => {
  console.log(`server is runing at ${port}`);
});
