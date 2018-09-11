import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "mobx-react";
import GameStore from './stores/GameStore';

ReactDOM.render(
  <Provider game={ GameStore }>
    <App />
  </Provider>,
  document.getElementById("root")
);
