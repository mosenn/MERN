import axios from "axios";
export const GetToken = async (code, setToken) => {
  const response = await axios.get(
    `http://localhost:3000/getAccessToken?code=${code}`
  );
  const token = await response.data.token;
  console.log(token, "this token from getToken at _api.js");

  setToken(token);
};

export const getInfomationGithubUser = async (token, setGithubUserData) => {
  const userData = await axios.get("https://api.github.com/user", {
    headers: {
      Authorization: `Bearer ${token}`, // add 'Bearer' before token
    },
  });

  return setGithubUserData(userData);
};
