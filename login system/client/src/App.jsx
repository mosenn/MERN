import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Product from "./component/Product";
import Login from "./component/Login";
import Access from "./component/Access";
import Home from "./component/Home";
function App() {
  return (
    <section className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path={"/product"} element={<Product />} />
          <Route path="/acess" element={<Access />} />
        </Routes>
      </BrowserRouter>
    </section>
  );
}

export default App;
