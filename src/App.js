import React, { Component } from "react";
// import logo from "./logo.svg";
// import classes from "./App.css";
import Header from "./components/Header/Header";
import Aux from "./hoc/Aux";
import Controles from "./components/Controles/Controles";
import Game from './scenes/Game/Game';

class App extends Component {
  render() {
    return (
      <Aux>
        <Header />
        <Game/>
        <Controles />
      </Aux>
    );
  }
}

export default App;
