const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const session = require("express-session");
const connecetToDb = require("./connection/db");
const bodyParser = require("body-parser");
app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));
app.use(
  session({
    secret: "your-secret-key",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true },
  })
);

app.use(express.urlencoded({ extended: false }));
app.use(
  cors()
  //*add orgin after deploy
);
//*data base connection
connecetToDb();

app.use(express.json());
app.use("/", require("./rootes/githubAcessToken"));
app.use("/", require("./rootes/userLoginAndRegister"));
//*for test depoly
app.get("/", (req, res) => {
  return res.send("Login System");
});
const port = 3000 || process.env.PORT;
app.listen(port, () => {
  console.log(`server is runing at ${port}`);
});
