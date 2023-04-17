const express = require("express");
const ws = require("ws");
const cors = require("cors");
const testRouter = require("./routes/test");
const userRouter = require("./routes/user");
const connectionToDb = require("./connection/Db");
let cookieParser = require("cookie-parser");
const { sign, verify } = require("./tools/jwt");
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
const server = app.listen(port, () => {
  console.log(`server is runing at ${port}`);
  console.log(`db is connect at ${process.env.DATA_BASE_URL}`);
});
const socket = new ws.WebSocketServer({ server });

socket.on("connection", (connection, req) => {
  console.log("connected");
  // connection.send('hellow')
  // console.log("req header from socket.one:", req.headers.cookie);
  const cookie = req.headers.cookie;
  // console.log("req header from socket.one:", cookie);
  if (cookie) {
    const tokenSTringInfoUser = cookie.replace("token=", "");
    const decodedTokenSocket = verify(tokenSTringInfoUser, "secret");
    console.log(decodedTokenSocket);
  }
});
