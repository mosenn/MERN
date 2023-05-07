import { Link } from "react-router-dom";
import Loading from "./Loading";
const RejectLogin = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Link to="/login">
        <h2>Wait 3 seconds, click if you are not logged in </h2>
        <Loading />
      </Link>
    </div>
  );
};

export default RejectLogin;
