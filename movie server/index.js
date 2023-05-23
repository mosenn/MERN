const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
app.use(express.json());
app.use(cors());
require("dotenv").config({ path: "./config.env" });

const connectingToDatabase = require("./connection/db");
const movieModel = require("./model/movie");

//* connect to data base
connectingToDatabase();
const port = process.env.PORT || 3000;

//*test route
app.get("/", (req, res) => {
  return res.send("this is movie server");
});
//*movie route
app.get("/movies", async (req, res) => {
  const movies = await movieModel.find();
  return res.status(200).send(movies);
});

app.listen(port, () => {
  console.log(`server is connect ${port}`);
});
