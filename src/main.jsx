import React from "react";
import ReactDOM from "react-dom";
import { SearchProvider } from "./context/searchContex";
import { HeadProvider } from 'react-head'
import App from "./App";
import "./index.css";

const headtags = [];
ReactDOM.render(
  <React.StrictMode>
    <HeadProvider headtags={headtags}>
      <SearchProvider>
        <App />
      </SearchProvider>
    </HeadProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
