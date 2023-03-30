import { useState, useEffect } from "react";

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "./components/Home/Home";
import { UserChat } from "./components/Chat/UserChat";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<UserChat />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
