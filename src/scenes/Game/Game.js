import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { observable } from "mobx";

import Player from "../../components/Player/Player";
import History from "../../components/History/History";

import classes from "./Game.css";

@inject("game")
@observer
export class Game extends Component {
  render() {
    const players = {
      p1: this.props.game.player1, 
      p2: this.props.game.player2
    };
    return (
      <main className={ classes.Game }>
        <Player
            label={ players.p1.label }
            weapon={ players.p1.weapon }
            score={ players.p1.score }
            loading={ this.props.game.loading }
          />
        <History />
        <Player
            label={ players.p2.label }
            weapon={ players.p2.weapon }
            score={ players.p2.score }
            loading={ this.props.game.loading }
          />
      </main>
    );
  }
}

export default Game;
