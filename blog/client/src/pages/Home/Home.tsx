import { useEffect, useState } from "react";
import { posts } from "../../api/post";
import { Link } from "react-router-dom";
import Post from "../../components/post/Post";

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
  const [post, setPost] = useState([]);
  const takeAllPosts = async () => {
    const response = await posts();

    console.log("POSTS", response);
    console.log("hiii");
    setPost(response?.data);
  };
  useEffect(() => {
    takeAllPosts();
    console.log("hi");
  }, []);
  console.log(post);
  return (
    <section className="grid justify-center md:justify-center md:grid-cols-2 lg:grid-cols-3 md:p-2 md:m-2 md:gap-2 lg:gap-">
      {post &&
        post?.map((blog: any) => {
          return <Post {...blog} />;
        })}
    </section>
  );
};

export default Home;
