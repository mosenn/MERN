const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
// const session = require("express-session");
const connecetToDb = require("./connection/db");
const bodyParser = require("body-parser");
// app.use(bodyParser.json({ limit: "50mb" }));
// app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(bodyParser.json({ limit: "4.5mb" }));
app.use(bodyParser.urlencoded({ limit: "4.5mb", extended: true }));

app.use(bodyParser.json());
// cors
app.use(cors());
// const carRoute = require("./router/car");
// const page404 = require("./router/404");
app.get("/", (req, res) => {
  return res.status(200).send("bodyParser.json({ limit: 4.5mb");
});
// routes
// app.use("/cars", carRoute);
// app.use(page404);

// mongoose.set("strictQuery", false);

// mongoose
//   .connect(
//     "mongodb+srv://mnazgul:qse8313656@cluster0.zutazhf.mongodb.net/carDatabase"
//   )
//   .then(() => {
//     console.log("data base is conect");
//   })
//   .catch((err) => console.log("someting wrong", err));

// acesse
// static(app);

// view ejs
// app.set("view engine", "ejs");
// app.set("views", "view");

const port = process.env.PORT || 3002;
app.listen(port, () => {
  console.log(`local server is runing at ${port}`);
});
