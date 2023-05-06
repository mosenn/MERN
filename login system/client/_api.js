import axios from "axios";

export const getToken = async (code, setToken) => {
  const response = await axios.get(
    `http://localhost:3000/getAccessToken?code=${code}`
  );
  const token = await response.data.token;
  return setToken(token);
};
