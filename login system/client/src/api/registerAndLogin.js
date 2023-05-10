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

export const loginUser = async (loginValue, setLoginData, setLoginError) => {
  const { email, password } = loginValue;
  console.log(email, password, "in login user api");

  try {
    const loginData = await axios.post("http://localhost:3000/login", {
      email,
      password,
    });
    return setLoginData(loginData);
  } catch (err) {
    console.log(err);
    setLoginError(err.response.status);
  }
};
