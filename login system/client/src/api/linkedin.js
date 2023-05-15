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

// export const getUserDataLinkedin = async (token) => {
//   try {
//     const data = await fetch("https://api.linkedin.com/v2", {
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`, // add 'Bearer' before token
//       },
//     });
//     const response = await data.json();
//     console.log(response, 'response in getUserDataLinkedin with fetch"');
//     // console.log(token, "token in getUserDataLinkedin");
//     // const localtoken = localStorage.getItem("tokens");
//     // console.log(localtoken, "localtoken in getUserDataLinkedin");
//     // const userData = await axios.get(
//     //   "https://api.linkedin.com/v2/emailAddress",
//     //   {
//     //     headers: {
//     //       "Content-Type": "application/json",
//     //       Authorization: `Bearer ${token}`, // add 'Bearer' before token
//     //     },
//     //   }
//     // );
//     // console.log(userData, "in getUserDataLinkedin");
//     // return userData;
//   } catch (err) {
//     console.log(err);
//   }
// };

export const getUserDataLinkedin = async () => {
  try {
    const token = localStorage.get("tokens");
    console.log(token);
    const axiosgetUserdata = await axios.get("https://api.linkedin.com/v2/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(axiosgetUserdata, "data in getUserDataLinkedin with axios");
    const data = await fetch("https://api.linkedin.com/v2/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const response = await data.json();
    console.log(response, 'response in getUserDataLinkedin with fetch"');
    return response;
  } catch (err) {
    console.log(err);
  }
};
