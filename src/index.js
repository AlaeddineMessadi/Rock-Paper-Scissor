import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "mobx-react";
import { BrowserRouter } from "react-router-dom";
import GameStore from './stores/GameStore';

ReactDOM.render(
  <Provider game={GameStore}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
