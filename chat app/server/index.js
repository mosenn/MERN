const express = require("express");
const dotEnv = require("dotenv");
const cors = require("cors");
const app = express();
const data = require("./data");
app.use(cors());
console.log(data);
dotEnv.config();

app.get("/", (req, res) => {
  return res.status(200).send(data);
});

app.get("/:id", (req, res) => {
  const FindChatWithId = data.find(
    (chats) => chats._id === req.params.id
  );
  return res.status(200).send(FindChatWithId);
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server is run at ${port}`);
});
