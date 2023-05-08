const userModel = require("../model/user");

const register = async (req, res) => {
  const { email, password, confirmPassword } = req.body;
  try {
    if (password === confirmPassword) {
      const registerUser = await userModel.create({
        email,
        password,
        confirmPassword,
      });

      return res.status(201).send(registerUser);
    }
    throw Error("passwords is not match");
  } catch (err) {
    console.log(err.message);
    return res.status(400).send(err.message);
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const login = await userModel.findOne({
      email,
      password,
    });
    if (login) {
      return res.status(200).send(login);
    }
    throw Error("email or password is worng");
  } catch (err) {
    console.log(err.message);
    return res.status(400).send(err.message);
  }
};

module.exports = {
  register,
  login,
};
