import React, { Component } from "react";
import { observer, inject } from "mobx-react";

import Player from "../../components/Player/Player";
import History from "../../components/History/History";

import Aux from '../../hoc/Aux';

import classes from "./Game.css";

@inject("game")
@observer
export class Game extends Component {

  componentDidMount() {
    this.props.game.initHistory();
  }
  render() {
    const players = {
      p1: this.props.game.player1,
      p2: this.props.game.player2
    };
    const tie = `${classes.tie} ${players.p1.weapon === players.p2.weapon && null !== players.p1.weapon ? classes.show : ''}`;
    return (
      <Aux>
        <div className={ tie }>Tie!</div>
        <main className={ classes.game }>
          <Player
            id="player1"
            label={ players.p1.label }
            weapon={ players.p1.weapon }
            score={ players.p1.score }
            loading={ this.props.game.loading }
          />
          <History />
          <Player
            id="player2"
            order={ 3 }
            label={ players.p2.label }
            weapon={ players.p2.weapon }
            score={ players.p2.score }
            loading={ this.props.game.loading }
          />
        </main>
      </Aux>
    );
  }
}

export default Game;
