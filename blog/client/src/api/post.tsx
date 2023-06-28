import axios from "axios";
const baseUrl = (axios.defaults.baseURL = "http://localhost:2023");

//* TODO Fixed Parameter Type createPost
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

export const posts = async () => {
  try {
    const response = await axios.get(`${baseUrl}/posts`);
    console.log(response, "RESPONSE");
    return response;
  } catch (err) {
    console.log(err);
  }
};
