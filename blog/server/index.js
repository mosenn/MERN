const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const connectToDb = require("./connection/db");
require("dotenv").config({ path: "./.env" });
const app = express();
//*parser
app.use(bodyParser.json());
app.use(cookieParser());
//*cors
app.use(
  cors({
    credentials: true,
    origin: "",
  })
);
//*mongod db connection
connectToDb();
//*testing route
app.use("/", async (req, res) => {
  res.status(200).send("server is ok");
});

//*listen
const port = process.env.PORT || 3010;
app.listen(port, () => {
  console.log(`server is connectin http://localhost:${port}`);
});
