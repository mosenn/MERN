import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Product = () => {
  const navigate = useNavigate();
  //*get token and user data from local
  let localtoken = localStorage.getItem("tokens");
  const gitUserData = JSON.parse(localStorage.getItem("gitData"));

  console.log(gitUserData?.data, "localgitUserDAta");
  const userGitData = gitUserData?.data;
  console.log(userGitData, "userdata in uselayout");

  const logout = () => {
    console.log("logout");
    localStorage.removeItem("tokens");
    localStorage.removeItem("gitData");
    if (!localStorage.getItem("tokens") && !localStorage.getItem("gitData")) {
      navigate("/login");
    }
  };

  useEffect(() => {
    console.log(localtoken, "localtoken");
    if (!localStorage.getItem("tokens") && !localStorage.getItem("gitData")) {
      navigate("/login");
    }
  }, []);

  return (
    <div>
      {localtoken && userGitData ? (
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
        <div>
          <h2> sry dont finde user data</h2>
          {/* {setTimeout(() => {
            navigate("/login");
          }, 3000)} */}
        </div>
      )}
    </div>
  );
};

export default Product;
