import axios from "axios";

import { Dispatch, SetStateAction } from "react";
interface registeruserType {
  username: string;
  password: string;
  confirmPassword: string;
  pic: string;
}

interface ErrorRegister {
  username?: string;
  password?: string;
  email?: string;
}
axios.defaults.withCredentials = true;
const baseUrl = (axios.defaults.baseURL = "http://localhost:2023");
//* register user api clinet
export const registerUser = async (
  UserRegisterData: registeruserType,

  setErrorRegister: Dispatch<SetStateAction<ErrorRegister>>
) => {
  const { username, password, confirmPassword, pic } = UserRegisterData;
  console.log(UserRegisterData);
  try {
    const register = await axios.post(
      `${baseUrl}/register`,
      {
        username,
        password,
        confirmPassword,
        pic,
      },
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    // console.log(register, "response user is register");
    return register;
  } catch (err: any & { response?: unknown }) {
    console.log(err);
    const errors = err?.response?.data;
    setErrorRegister(errors);
  }
};

//* login user api clinet
interface loginValue {
  username: string;
  password: string;
}
export const loginUser = async (userLoginData: loginValue) => {
  try {
    const user = await axios.post(`${baseUrl}/login`, userLoginData);
    // console.log(user, "login user data");
    return user;
  } catch (err) {
    console.log("someting worng for login user ", err);
  }
};
