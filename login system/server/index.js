const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
// const session = require("express-session");

const connecetToDb = require("./connection/db");
const bodyParser = require("body-parser");
app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));

app.use(bodyParser.json());
// cors
app.use(cors());
// const carRoute = require("./router/car");
// const page404 = require("./router/404");

//*data base connection
connecetToDb();

app.get("/", (req, res) => {
  return res.status(200).send("add connect to db");
});
// routes
// app.use("/cars", carRoute);
// app.use(page404);




const port = process.env.PORT || 3002;
app.listen(port, () => {
  console.log(`local server is runing at ${port}`);
});
