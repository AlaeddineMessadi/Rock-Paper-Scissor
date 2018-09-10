import { observable, computed, action, autorun } from "mobx";

import { modes, modeKeys } from "../constants/MODES";
import { weapons, weaponKeys } from "../constants/WEAPONS";


class GameStore {
  /** Constants */
  modes = modes;
  modeKeys = modeKeys;
  weapons = weapons;
  weaponKeys = weaponKeys;

  /** Observables */
  @observable
  mode = modeKeys[0];

  @observable
  player1 = {
    loading: false,
    weapon: null,
    score: 0
  };

  @observable
  player2 = {
    loading: false,
    weapon: null,
    score: 0
  };

  @observable
  winner = null;

  @observable
  historyMoves = [];

  /******************* Actions  ****************/
  // Toggle Game Mode
@action
modeToggler() {
  this.mode = this.mode === this.mode[0] ? this.mode[1] : this.mode[0]
}

  // reset the game
  @action
  reset() {
    this.player1 = {
      loading: false,
      weapon: null,
      score: 0
    };
    this.player2 = {
      loading: false,
      weapon: null,
      score: 0
    };
    this.winner = null;
  }
  /********* End Actions  *******************/


  /*************** Methods  *****************/
  getRandomWeapon = () => {
    return weaponKeys[(weaponKeys.length * Math.random()) << 0];
  };

  getWinner = (weapon1, weapon2) => {
    if (weapon1 === weapon2) return 0;
    return weapons[weapon1].wins.some(wins => wins === weapon2) ? 1 : 2;
  };
  /*************** End Methods  *****************/

}

const gameStore = new GameStore();

let loading, weapon, score;
autorun(() => {
  const { loading, weapon, score } = gameStore.player1;
  console.log ("Player 1");
  console.log("loading: " + gameStore.player1.loading, "  |  weapon: " + gameStore.player1.weapon, "  |  score: " + gameStore.player1.score);
  console.log ("Player 2");
  console.log("loading: " + gameStore.player2.loading, "  |  weapon: " + gameStore.player2.weapon, "  |  score: " + gameStore.player2.score);

});

export default gameStore;
