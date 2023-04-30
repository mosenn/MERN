const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  return res.status(200).send("hi sv");
});

const port = 3000 || process.env.PORT;
app.listen(port, () => {
  console.log(`server is runing at ${port}`);
});
