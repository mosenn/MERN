import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div>
      <Link to="https://github.com/login/oauth/authorize?client_id=373605aaa0df2e4fecde">
        Login with github
      </Link>
    </div>
  );
};

export default Login;
