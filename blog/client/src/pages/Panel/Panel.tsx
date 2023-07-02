import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteUserPost, userPost } from "../../api/post";
import { format } from "date-fns";

interface userPost {
  _id: string;
  title: string;
  cover: string;
  createdAt: number;
}
const Panel = () => {
  const [postUser, setPostUser] = useState([]);
  const takeUserPost = async () => {
    const response = await userPost();
    console.log(response);
    setPostUser(response?.data);
  };

  const deletePostUser = async (id: string) => {
    const response = await deleteUserPost(id);
    console.log(response, "response");
  };
  useEffect(() => {
    takeUserPost();
  }, []);

  return (
    <div>
      <h1>Panel</h1>
      <Link to="/createpost">Create Post</Link>
      {postUser.length > 0 &&
        postUser.map((post: userPost) => {
          return (
            <div key={post._id}>
              <p>{post.title}</p>
              <figure>
                <img
                  src={post.cover}
                  alt={post.title}
                  className="w-[50px] h-[50px] rounded-full"
                />
              </figure>
              <p>{format(new Date(post.createdAt), "yyyy-MM-dd")}</p>
              <button
                type="button"
                onClick={() => {
                  deletePostUser(post._id);
                }}
              >
                delete
              </button>
            </div>
          );
        })}
    </div>
  );
};

export default Panel;
