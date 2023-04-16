import axios from "axios";
axios.defaults.baseURL = "http://localhost:4010";
axios.defaults.withCredentials = true;

export const handleRegisterUser = async (
  username,
  password,
  setUser,
  setUserId,
  userToken,
  setUserToken
) => {
  const { data } = await axios.post(
    "/register",
    {
      username,
      password,
    },
    { headers: { "Content-Type": "application/json" } }
  );
  // console.log(data.username, "this username coming from axios post");
  // console.log(data.id, "this id coming from axios post");
  // console.log(data.id, "this id coming from axios post");
  // console.log(data.token, "this token coming from axios post");
  setUser(data.username);
  setUserId(data.id);
  setUserToken(data.token);
};

export const Profile = async () => {
  const userDataResponse = await axios.get("/profile");
  console.log(userDataResponse, "prfoile user info");
  // await axios.get("/profile").then((response) => {
  //   console.log(response, "response in context");
  // });
};
