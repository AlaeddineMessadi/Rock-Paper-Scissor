import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { observable } from "mobx";

import Player from "../../components/Player/Player";

import classes from "./Game.css";

@inject("game")
@observer
export class Game extends Component {
  render() {
    const players = [this.props.game.player1, this.props.game.player2];
    return (
      <main className={classes.Game}>
        {players.map((player, index) => (
          <div className={classes.Player} key={index}>
            <Player
              label={player.label}
              weapon={player.weapon}
              score={player.score}
            />
          </div>
        ))}
      </main>
    );
  }
}

export default Game;
