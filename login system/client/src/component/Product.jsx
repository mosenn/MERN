import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Product = () => {
  const [githubData, setGithubData] = useState({});

  const navigate = useNavigate();
  let localtoken = localStorage.getItem("tokens");

  const logout = () => {
    console.log("logout");
    localStorage.removeItem("tokens");
    if (!localStorage.getItem("tokens")) {
      navigate("/login");
    }
  };

  const gitUserData = JSON.parse(localStorage.getItem("gitData"));
  const userGitData = gitUserData.data;
  // console.log(gitUserData.data, "localgitUserDAta");
  useEffect(() => {
    console.log(localtoken, "localtoken");
    if (!localStorage.getItem("tokens")) {
      navigate("/login");
    }
  }, []);
  return (
    <div>
      {localtoken ? (
        <>
          <button
            onClick={() => {
              logout();
            }}
          >
            logout
          </button>
          <h1>welcome {userGitData?.login}</h1>
          <h2>{userGitData?.blog ? userGitData?.blog : ""}</h2>
          <figure>
            <img
              src={userGitData?.avatar_url}
              style={{ borderRadius: "50%", width: "150px", height: "150px" }}
              alt=""
            />
          </figure>
          <Link to={userGitData?.html_url}>{userGitData?.html_url}</Link>
          <h1>PRODUCT PAGE</h1>{" "}
        </>
      ) : (
        navigate("/login")
      )}
    </div>
  );
};

export default Product;
