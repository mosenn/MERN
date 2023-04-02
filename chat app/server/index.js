const express = require("express");
const dotEnv = require("dotenv");
const cors = require("cors");
const ColorsLog = require("colors");
const connectToMongoDb = require("./config/dbConnect");
const app = express();
const data = require("./data");
const router = require("./routes/user");

app.use(cors());
// console.log(data);
dotEnv.config();
//* data base connection
connectToMongoDb();
//*accpet jason
app.use(express.json());

//*routes
app.use("/", router);

app.get("/", (req, res) => {
  return res.status(200).send(data);
});



const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server is run at ${port}`.brightGreen.bold);
});
