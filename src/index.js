import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
      <App />,
  document.getElementById("root")
);
serviceWorker.register();

// npm i -g server
// npx serve -s build
// npm i react-ios-pwa-prompt
