import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "./component/Login";
import Home from "./component/Home";
import GithubAccess from "./component/GithubAccess";
import GithubUserProfile from "./component/githubUserProfile";
function App() {
  return (
    <section className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path={"/profile"} element={<GithubUserProfile />} />
          <Route path="/acess" element={<GithubAccess />} />
        </Routes>
      </BrowserRouter>
    </section>
  );
}

export default App;
