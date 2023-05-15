import axios from "axios";
export const takeCodeAndPostToServerLinkedin = async (code) => {
  // console.log(code, "code in api clinet"); //* have log code
  try {
    const response = await axios.post(
      `http://localhost:3000/accessTokenLinkedin?code=${code}`
    );
    const data = await response.data;
    // console.log(linkedinData, "linkedin response at _api.js"); //*have log here
    return data;
  } catch (err) {
    console.log(err.data, "error in api clinet");
  }
};

export const getUserDataLinkedin = async (token) => {
  try {
    console.log(token, "token in getUserDataLinkedin");
    const localtoken = localStorage.getItem("tokens");
    console.log(localtoken, "localtoken in getUserDataLinkedin");
    const userData = await axios.get(
      "https://api.linkedin.com/v2/me?projection=(id,profilePicture(displayImage~:playableStreams))",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localtoken}`, // add 'Bearer' before token
        },
      }
    );
    console.log(userData , 'in getUserDataLinkedin')
    return userData;
  } catch (err) {
    console.log(err);
  }
};
