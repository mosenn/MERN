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
      className="border lg:p-0 lg:m-0 flex flex-col items-center m-2  text-left"
    >
      <h2 className="p-2 text-xl  font-semibold">{title}</h2>
      <figure className="flex flex-col items-center">
        <img
          className="w-72 h-[250px] lg:w-96 md:w-[70%] rounded-s"
          src={cover}
          alt={title}
        />
        <figcaption className="p-3 md:w-[60%] w-72 lg:w-96 lg:justify-between flex mt-2 justify-between text-gray-400">
          <p>{author.username}</p>
          <p>{format(new Date(createdAt), "yyyy-MM-dd")}</p>
        </figcaption>
      </figure>
      <p
        // dangerouslySetInnerHTML={{ __html: blog.content }}
        className="w-72 md:text-center md:w-[250px] lg:w-96 text-left mt-1 mb-1 p-2 md:p-0 "
      >
        {summery}
      </p>
      <div className="p-2 w-[100%] flex justify-start md:justify-center">
        <Link
          className="bg-blue-500 md:w-[60%]  rounded p-3  text-zinc-50 font-semibold"
          to={`detail/${_id}`}
        >
          read more
        </Link>
      </div>
    </div>
  );
};

export default Post;
