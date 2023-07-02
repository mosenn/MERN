import { useParams } from "react-router-dom";
import { posts } from "../../api/post";
import { useEffect, useState } from "react";
import { postUserComments, getAllPostComments } from "../../api/comment";
import { useGlobalContext } from "../../context/context";
interface Post {
  _id: string;
  title: string;
  content: string;
  img: string;
  createdAt: number;
  summery: string;
  username: string;
  author: {
    username: string;
    pic: string;
  };
}

const Detail = () => {
  const { userInfoOnline } = useGlobalContext();
  const [postData, setPostData] = useState<Post[]>([]);
  const [comments, setComments] = useState([]);
  const [value, setValue] = useState({
    comment: "",
  });
  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };
  const { id } = useParams();
  const takePost = async () => {
    const response = await posts();
    // console.log(response);
    setPostData(response.data);
  };
  // console.log(userInfoOnline, "userinfoonline");

  // console.log("PostData", postData);

  // console.log(pos, "pos");
  // console.log(pos?.author.pic);
  const pos = postData.find((p: Post) => {
    return p?._id === id;
  });

  const sendComment = async () => {
    if (value) {
      const response = await postUserComments(
        value,
        userInfoOnline.id,
        pos?._id as string
      );

      console.log(response, "Response handlesubmit comment");
    } else {
      console.log("is empty");
    }
  };
  const takeAllComments = async () => {
    //TODO must pass post id to getAllPostComments for take comments for posts . 
    const comments = await getAllPostComments(pos?._id as string);
    setComments(comments.data);
    console.log(comments, "Comments all");
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log(value);
    sendComment();
  };

  useEffect(() => {
    takePost();
    takeAllComments();
  }, []);
  return (
    <div>
      <h1>Detail</h1>
      {pos?.title}
      <p>author : {pos?.author.username}</p>
      <img
        className="w-[50px]"
        src={pos?.author.pic}
        alt={pos?.author.username}
      />
      <div>
        {comments &&
          comments.map((com: any) => {
            // console.log(com, "this is com in map");
            return (
              <div>
                <p>{com.comment}</p>
                <p>{com?.author?.username}</p>
                <img src={com?.author?.pic} alt="" className="w-[50px]" />
              </div>
            );
          })}
      </div>
      <form action="" onSubmit={handleSubmit}>
        <input
          className="w-[250px] h-[150px] border-2 border-red-300"
          name="comment"
          placeholder="write your comment"
          onChange={handleOnchange}
        ></input>
        <button>send comment</button>
      </form>
    </div>
  );
};

export default Detail;
// const [post, setPost] = useState(null);

// const fetchPost = async () => {
//   const response = await api
//     .get(`/posts/${postId}`)
//     .catch((err) => console.log(err));
//   setPost(response.data);
// };
