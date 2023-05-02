import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { useEffect } from "react";
import Product from "./component/Product";
import Login from "./component/Login";
function App() {

  
  useEffect(() => {
    console.log("hi");
    // console.log(new URLSearchParams());
    // fetch("http://localhost:3000/login/github/callback").then((response) => {
    //   console.log(response);
    // });
  }, []);
  return (
    <section className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </section>
  );
}

export default App;
