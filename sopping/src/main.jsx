import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./commponent/home/Home";
import Registor from "./Registor/Registor";
import About from "./commponent/about/About";
import Header from "./commponent/header/Header";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
