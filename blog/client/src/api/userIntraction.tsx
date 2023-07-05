import axios from "axios";
const baseUrl = (axios.defaults.baseURL = "http://localhost:2023");

export const postLike = async (postId: string) => {
  console.log(postId, "postId");
  try {
    const like = await axios.post(
      `${baseUrl}/likedPost/${postId}`,
      {},
      {
        withCredentials: true,
      }
    );
    console.log(like, "like in api");
    return like;
  } catch (err: any) {
    console.log(err);
    throw new Error(err.response?.data?.message || "Something went wrong");
  }
};

export const getLikes = async (postId: string) => {
  try {
    const likes = await axios.get(`${baseUrl}/likes/${postId}`);
    // console.log("All Likes in get Likes Api", likes);
    return likes;
  } catch (err: any) {
    console.log("Get Likes Error", err);
    return err;
  }
};

export const testing = async () => {
  try {
    const test = await axios.post(`${baseUrl}/testLike`);
    console.log(test, "test in api");
    return test;
  } catch (err: any) {
    console.log(err);
  }
};
