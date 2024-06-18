import React from "react";
import ReactDOM from "react-dom/client";
import Nav from "./component/Nav/Nav";
import "./index.css";
import MainContent from "./component/MainContent/MainContent";
import Sidebar from "./component/Sidebar/Sidebar";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Nav />
    <div className="main-content">
      <Sidebar className="sidebar" />
      <MainContent className="content" />
    </div>
  </React.StrictMode>
);
