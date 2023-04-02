const jwt = require("jsonwebtoken");

const FunCreateToken = (id) => {
  return jwt.sign({ id }, "secret", {
    expiresIn: "1d",
  });
};

module.exports = {
    FunCreateToken
}
