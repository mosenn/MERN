import axios from "axios";
axios.defaults.baseURL = "http://localhost:4010";

export const handleRegisterUser = async (username , password) => {
  const { data } = await axios.post(
    "/register",
    {
      username,
      password
    },
    { headers: { "Content-Type": "application/json" } }
  );
  console.log(data , 'this data coming from axios post');
};
