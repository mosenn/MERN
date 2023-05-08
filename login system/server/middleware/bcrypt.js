const bcrypt = require("bcryptjs");

//*chat gpt code
const HashingPW = async (password, confirmPassword) => {
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);
  const hashConfirmPassword = await bcrypt.hash(confirmPassword, salt);
  //   const hashedPassword = (password = hashPassword);
  //   const hashedConfirmPassword = (confirmPassword = hashConfirmPassword);
  return {
    hashedPassword: hashPassword,
    hashedConfirmPassword: hashConfirmPassword,
  };
};

const hash = async (password, confirmPassword) => {
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);
  const hashConfirmPassword = await bcrypt.hash(confirmPassword, salt);
  return {
    hashPassword,
    hashConfirmPassword,
  };
};

module.exports = {
  HashingPW,
  hash,
};
