import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./Router";
import "./index.css";
import { GlobalStyled } from "./GlobalStyled";
// import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyled></GlobalStyled>
    <Router></Router>
    {/* <App></App> */}
  </React.StrictMode>
);
