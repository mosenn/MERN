const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

app.get("/", (req, res) => {
  return res.send("chat app");
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`server is run at ${port}`);
});
