import axios from "axios";
const baseUrl = (axios.defaults.baseURL = "http://localhost:2023");

export const createPost = async (data: any) => {
  console.log(data, "data in create post");
  try {
    const response = await axios.post(`${baseUrl}/createpost`, data, {
      withCredentials: true,
    });
    console.log(response, "response");
  } catch (err) {
    console.log("Create Post Errr", err);
  }
};
