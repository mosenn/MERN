import React from "react";
import Button from "../../components/button/Button";
interface dataPostFake {
  id: number;
  postCover: string;
  postTitle: string;
  postAuthor: string;
  description: string;
  date: string;
}

const fakeData: dataPostFake[] = [
  {
    id: 1,
    postCover: "./porfolioapp.jpg",
    postTitle: "post one",
    postAuthor: "Author one",
    date: "2023/2/1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 2,
    postCover: "./porfolioapp.jpg",
    postTitle: "post two",
    postAuthor: "Author two",
    date: "2023/2/1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 3,
    postCover: "./porfolioapp.jpg",
    postTitle: "post three",
    postAuthor: "Author three",
    date: "2023/2/1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 4,
    postCover: "./porfolioapp.jpg",
    postTitle: "post foure",
    postAuthor: "Author foure",
    date: "2023/2/1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 5,
    postCover: "./porfolioapp.jpg",
    postTitle: "post fiv",
    postAuthor: "Author five",
    date: "2023/2/1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 6,
    postCover: "./porfolioapp.jpg",
    postTitle: "post six",
    postAuthor: "Author six",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    date: "2023/2/1",
  },
];
const Home = () => {
  return (
    <section className="grid justify-center md:justify-center md:grid-cols-2 lg:grid-cols-3 md:p-2 md:m-2 md:gap-2 lg:gap-">
      {fakeData?.map((blog: any) => {
        return (
          <div
            key={blog.id}
            className="border lg:p-0 lg:m-0 flex flex-col items-center m-2  text-left"
          >
            <h2 className="p-2 text-xl  font-semibold">{blog.postTitle}</h2>

            <figure className="flex flex-col items-center">
              <img
                className="w-72 lg:w-96 md:w-[70%] rounded-s"
                src={blog.postCover}
                alt={blog.postTitle}
              />
              <figcaption className="p-3 md:w-[60%] w-72 lg:w-96 lg:justify-between flex mt-2 justify-between text-gray-400">
                <p>{blog.postAuthor}</p>
                <p>{blog.date}</p>
              </figcaption>
            </figure>
            <p className="w-72 md:text-center md:w-[250px] lg:w-96 text-left mt-1 mb-1 p-2 md:p-0 ">
              {blog.description.substring(0, 147)}
            </p>
            <div className="p-2 w-[100%] flex justify-start md:justify-center">
              <Button
                className="bg-blue-500 md:w-[60%]  rounded p-3  text-zinc-50 font-semibold"
                text="read more"
                type="button"
              />
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Home;