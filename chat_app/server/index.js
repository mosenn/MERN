const express = require("express");
const cors = require("cors");
const testRouter = require("./routes/test");
const userRouter = require("./routes/user");
const connectionToDb = require("./connection/db");
let cookieParser = require("cookie-parser");
const app = express();
app.use(cors({ credentials: true, origin: "http://127.0.0.1:5173" }));

app.use(cookieParser());
app.use(express.json());

//*connect to data base
connectionToDb();
//*doTEnv

require("dotenv").config({ path: "./config/config.env" });
//*Routers
app.use("/", testRouter);
app.use("/", userRouter);
//*Listen
const port = process.env.PORT || 3010;
app.listen(port, () => {
  console.log(`sv is runing at ${port}`);
  console.log(process.env.DATA_BASE_URL, "in index");
});
