import axios from "axios";
const baseUrl = (axios.defaults.baseURL = "http://localhost:2023");

//* TODO Fixed Parameter Type createPost
export const createPost = async (data: any) => {
  console.log(data, "data in create post");
  try {
    const post = await axios.post(`${baseUrl}/createpost`, data, {
      withCredentials: true,
    });
    // console.log(response, "response");
    return post;
  } catch (err: any) {
    // console.log("Create Post Errr", err);
    return err;
  }
};

export const posts = async () => {
  try {
    const response = await axios.get(`${baseUrl}/posts`);
    // console.log(response, "RESPONSE");
    return response;
  } catch (err: any) {
    console.log("All Posts Error", err);
    return err;
  }
};

export const userPost = async () => {
  try {
    const response = await axios.get(`${baseUrl}/userposts`);
    console.log(response, "RESPONSE");
    return response;
  } catch (err) {
    console.log("User Post Error", err);
    return err;
  }
};

export const deleteUserPost = async (id: string) => {
  try {
    const response = await axios.delete(`${baseUrl}/deletepostuser/${id}`, {
      method: "delete",
    });
    console.log(response, "response");
    return response;
  } catch (err) {
    console.log("Delete Post Error", err);
    return err;
  }
};
