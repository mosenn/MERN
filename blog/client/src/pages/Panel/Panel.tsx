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
            <section className=" flex flex-col justify-center items-center   w-[100%]">
              <div key={post._id} className="border w-[100%] md:w-[80%] mt-3 ">
                <section>
                  <div className="flex justify-around  items-center p-2 m-3 md:relative">
                    <figure className="md:w-[15%] flex justify-center">
                      <img
                        src={post.cover}
                        alt={post.title}
                        className="w-[50px] h-[50px] rounded-full"
                      />
                    </figure>
                    <p className="md:w-[15%] text-center">{post.title}</p>

                    <p className="md:w-[15%] text-center">
                      {format(new Date(post.createdAt), "yyyy-MM-dd")}
                    </p>
                    {/* Buttons in tablet scope */}
                    <div className="  hidden md:flex  justify-evenly ml-[50px] w-[fit-content]   items-center ">
                      <button
                        className="font-semibold m-3 w-[70px] h-[25px] flex justify-center items-center  bg-red-300 p-3 rounded-[5px]"
                        type="button"
                        onClick={() => {
                          deletePostUser(post._id);
                        }}
                      >
                        delete
                      </button>
                      <button className="m-3  font-semibold bg-green-300 p-3 rounded-[5px] w-[70px] h-[25px] flex justify-center items-center">
                        edit
                      </button>
                      <button className="m-3 font-semibold bg-blue-300 p-3 rounded-[5px] w-[70px] h-[25px] flex justify-center items-center">
                        priview
                      </button>
                    </div>
                  </div>
                  {/* Buttons in mobile scope */}
                  <div className="flex md:hidden justify-around items-center p-2 m-3">
                    <button
                      className="font-semibold m-3 w-[70px] h-[25px] flex justify-center items-center  bg-red-300 p-3 rounded-[5px]"
                      type="button"
                      onClick={() => {
                        deletePostUser(post._id);
                      }}
                    >
                      delete
                    </button>
                    <button className="m-3  font-semibold bg-green-300 p-3 rounded-[5px] w-[70px] h-[25px] flex justify-center items-center">
                      edit
                    </button>
                    <button className="m-3 font-semibold bg-blue-300 p-3 rounded-[5px] w-[70px] h-[25px] flex justify-center items-center">
                      preview
                    </button>
                  </div>
                </section>
              </div>
            </section>
          );
        })}
    </div>
  );
};

export default Panel;
