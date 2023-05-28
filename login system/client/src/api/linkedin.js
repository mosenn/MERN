import axios from "axios";

//*take url params code pass to api for take token
export const takeCodeAndPostToServerLinkedin = async (code) => {
  // console.log(code, "code in api clinet"); //* have log code
  try {
    const response = await axios.post(
      //*set route server for get code
      // `https://serverloginsystem.vercel.app/accessTokenLinkedin?code=${code}` //=> for online linkdin sigin
      `http://localhost:5000/accessTokenLinkedin?code=${code}` //=> for local  linkdin sigin
    );
    const data = await response.data;
    // console.log(linkedinData, "linkedin response at _api.js"); //*have log here

    return data;
  } catch (err) {
    console.log(err.data, "err in api clinet");
  }
};

export const getUserDataSiginLinkedin = async (setSiginError) => {
  try {
    const userInfoLinkedin = await axios.get(
      "http://localhost:5000/signinLinkedin"
    );
    console.log(userInfoLinkedin, "in api func data");
    return userInfoLinkedin;
  } catch (err) {
    setSiginError(err.response.status);
    console.log("siginData err", err?.response?.data);
    // console.log(err.response.status)
  }
};
