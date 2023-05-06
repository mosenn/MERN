const express = require("express");
const app = express();
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();
const session = require("express-session");

app.use(
  session({
    secret: "your-secret-key",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true },
  })
);

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json("server is runing");
});

const clinet_id = process.env.CLIENT_ID;
const clinet_secret = process.env.CLIENT_SECRET;
const Ridirect_URL = `https://github.com/login/oauth/authorize?client_id=373605aaa0df2e4fecde`;

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

    const token = new URLSearchParams(response.data).get("access_token");

    console.log(`it's token in getAccessToken function  :`, token);
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
    console.log("token in route getAccessToken :", token);
    // Store the token in the session
    // req.session.token = token;
    // console.log(req.session.token, "coockie set at getAccessToken");
    return res.json({ token });
  } catch (err) {
    console.log(err, "err");
  }
});

app.get("/getUserData", async (req, res) => {
  try {
    // Retrieve the token from the session
    const token = req.session.token;
    console.log(token, "coockie token userdata route");
    req.get("Authorization"); //Bearer token
    const userData = await axios.get("https://api.github.com/user", {
      headers: {
        Authorization: `Bearer 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`, // add 'Bearer' before token
        // Authorization: req.get("Authorization"), // add 'Bearer' before token
      },
    });
    // console.log("userData", userData);
    return res.status(200).send(userData);
  } catch (err) {
    console.log(err, "err");
  }
});

const port = 3000 || process.env.PORT;
app.listen(port, () => {
  console.log(`server is runing at ${port}`);
});
