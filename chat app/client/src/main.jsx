import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import chatProvider from "../context/chatProvider";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <chatProvider>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </chatProvider>
);
