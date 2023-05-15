import axios from "axios";

export const takeCodeAndPostToServer = async (code) => {
  console.log(code, "code in api clinet");
  try {
    const response = await axios.post(
      `http://localhost:3000/accessTokenLinkedin?code=${code}`
    );
    const token = await response.data;
    console.log(token, "linkedin response at _api.js");
  } catch (err) {
    console.log(err.data, "error in api clinet");
  }
};
