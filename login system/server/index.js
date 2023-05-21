const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");
// const session = require("express-session");

// const connecetToDb = require("./connection/db");
const bodyParser = require("body-parser");
app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));

app.use(bodyParser.json());
// cors
app.use(cors());
// const carRoute = require("./router/car");
// const page404 = require("./router/404");

//*data base connection
// connecetToDb();

mongoose.set("strictQuery", false);

const connecetToDb = async () => {
  try {
    const connect = await mongoose.connect(process.env.DB_URL);

    console.log(`db is connect at ${connect.connection.host}`);
  } catch (err) {
    console.log(err.message, "data base cant connect");
    process.exit(1);
  }
};
connecetToDb();

//*testing
app.get("/", (req, res) => {
  return res.status(200).send("this server for login system try to deploy");
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`local server is runing at ${port}`);
});
