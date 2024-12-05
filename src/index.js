import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./Router";
import "./index.css";
import { GlobalStyled } from "./GlobalStyled";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyled></GlobalStyled>
    <Router></Router>
  </React.StrictMode>
);
