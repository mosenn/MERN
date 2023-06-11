import axios from "axios";

interface registeruserType {
  username: string;
  password: string;
  confirmPassword: string;
  pic: string;
}
export const registerUser = async (UserRegisterData: registeruserType) => {
  const { username, password, confirmPassword, pic } = UserRegisterData;
  console.log(UserRegisterData);
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
  console.log("response", register.data);
};
