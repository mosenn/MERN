import axios from "axios";
axios.defaults.baseURL = "http://localhost:4010" || "http://localhost:4010/";
// axios.defaults.withCredentials = true;

export const handleRegisterUser = async (
  username,
  password,
  setUser,
  setUserId
) => {
  const { data } = await axios.post(
    "/register",
    {
      username,
      password,
    },
    { headers: { "Content-Type": "application/json" } }
  );
  console.log(data.username, "this username coming from axios post");
  console.log(data.id, "this id coming from axios post");
  setUser(data.username);
  setUserId(data.id);
};

export const Profile = async () => {
  const userDataResponse = await axios.get("/profile");
  console.log(userDataResponse, "this data from profile");
};
