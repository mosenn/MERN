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

export const registerUser = async (
  UserRegisterData: registeruserType,

  setErrorRegister: Dispatch<SetStateAction<ErrorRegister>>
) => {
  const { username, password, confirmPassword, pic } = UserRegisterData;
  console.log(UserRegisterData);
  try {
    const register = await axios.post(
      "http://localhost:2023/register",
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
