import axios from "axios";

export const registerUser = async (
  registerValue,
  setDataUserRegister,
  setUserRegisterError
) => {
  const { email, password, confirmPassword } = registerValue;
  try {
    const userData = await axios.post(
      "http://localhost:3000/register",
      {
        email,
        password,
        confirmPassword,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(userData);
    return setDataUserRegister(userData);
  } catch (err) {
    console.log(err);
    setUserRegisterError(err.response.data);
  }
};

// let data = JSON.stringify({
//   email: "mohsen45@gmail.com",
//   password: "Aw2$377779",
//   confirmPassword: "Aw2$377779",
// });

// export const registerUser = (registerValue) => {
//   const { email, password, confirmPassword } = registerValue;
//   let config = {
//     method: "post",
//     maxBodyLength: Infinity,
//     url: "http://localhost:3000/register",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     data: JSON.stringify({
//       email: email,
//       password: password,
//       confirmPassword: confirmPassword,
//     }),
//   };
//   axios
//     .request(config)
//     .then((response) => {
//       console.log(JSON.stringify(response.data));
//     })
//     .catch((error) => {
//       console.log(error.response.data);
//     });
// };
