import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

/**
 * Grab the `data-inject-id` attribute from the script tag to customize which element is used for React root
 */
const getInjectElementId = (): string | null => {
    const scripts = document.getElementsByTagName('script');
    return scripts[scripts.length - 1]?.getAttribute('data-inject-id');
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
    document.getElementById(getInjectElementId() ?? 'root')
);
