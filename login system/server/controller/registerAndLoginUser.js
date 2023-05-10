const userModel = require("../model/user");
const { compare } = require("../middleware/bcrypt");
const register = async (req, res) => {
  const { email, password, confirmPassword } = req.body;
  try {
    //*validation register
    await userModel.userValidation(req.body);
    //*create user(register)
    const registerUser = await userModel.create({
      email,
      password,
      confirmPassword,
    });
    return res.status(201).send(registerUser);
  } catch (err) {
    // console.log(err.keyPattern, "errors");
    // console.log(err.errors, "errors");
    //*error for same email(unique email in schema)
    if (err.keyPattern) {
      return res
        .status(400)
        .send([err.errors, "email has exist chose another email"]);
    }
    return res.status(400).send(err.errors);
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const login = await userModel.findOne({
      email,
    });
    const passwordIsOkey = await compare(password, login.password);
    console.log(passwordIsOkey, "passisoky");
    if (login && passwordIsOkey) {
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