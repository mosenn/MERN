import React from "react";
import { format } from "date-fns";
import { Link } from "react-router-dom";
interface propsPost {
  _id: string;
  cover: string;
  title: string;
  createdAt: number;
  summery: string;
  author: {
    username: string;
  };
}
const Post = ({ _id, cover, title, createdAt, author, summery }: propsPost) => {
  return (
    <div
      key={_id}
      className="border  lg:p-0 lg:m-0 flex flex-col items-center   m-2  text-left"
    >
      <h2 className=" text-inherit  font-semibold">{title.substring(0, 34)}</h2>
      <figure className="flex flex-col items-center">
        <img
          className="w-72 object-cover h-[250px] lg:w-96 md:w-[70%] rounded-s"
          src={cover}
          alt={title}
        />
        <figcaption className="p-3 md:w-[60%] w-72 lg:w-96 lg:justify-between flex mt-2 justify-between text-gray-400">
          <p>{author.username}</p>
          <p>{format(new Date(createdAt), "yyyy-MM-dd")}</p>
          {/* <p>{comments.length}</p> */}
        </figcaption>
      </figure>
      <div>
        <p
          // dangerouslySetInnerHTML={{ __html: blog.content }}
          className="w-72 md:text-left md:w-[250px] lg:w-96 text-left mt-1 mb-1 p-2 md:p-0 "
        >
          {summery.substring(0, 200)}...
        </p>
        <div className=" mt-3 mb-2 w-[100%] flex justify-start">
          <Link
            className="bg-blue-500 w-[100%] md:w-[40%]   flex justify-center  rounded p-3  text-zinc-50 font-semibold"
            to={`detail/${_id}`}
          >
            read more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Post;
