import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {getScriptAttribute} from "./helpers";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
    document.getElementById(getScriptAttribute('data-inject-id') ?? 'root')
);
