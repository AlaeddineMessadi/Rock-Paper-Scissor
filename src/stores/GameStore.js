import { observable, action, autorun, intercept } from "mobx";

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
  history = [];
  @observable
  mode = modeKeys[0];
  @observable
  loading = false;

  // player1 either Human or Bot
  @observable
  player1 = {
    label: this.modes[this.mode].player1Label,
    weapon: null,
    score: 0
  };

  // player2 is always a Bot
  @observable
  player2 = {
    label: this.modes[this.mode].player2Label,
    weapon: null,
    score: 0
  };

  @observable
  winner = null;

  @observable
  tie = false;



  /******************* Actions  ****************/
  // Toggle Game Mode
  @action
  modeToggler = () => {
    this.mode =
      this.mode === this.modeKeys[0] ? this.modeKeys[1] : this.modeKeys[0];
    this.reset();
    this.player1.label = this.modes[this.mode].player1Label;
    this.player2.label = this.modes[this.mode].player2Label;


  };

  // reset the game
  @action
  reset() {
    this.player1 = {
      weapon: null,
      score: 0
    };
    this.player2 = {
      weapon: null,
      score: 0
    };
    this.winner = null;
    this.tie = false;
  }

  // Pick Weapon for user1 (Human)
  @action
  pickWeapon(weapon) {
    // reset tie
    if (this.tie) this.tie = false;
    this.loading = true;
    setTimeout(() => {
      this.loading = false;

      this.player1.weapon = weapon || this.getRandomWeapon();
      this.player2.weapon = this.getRandomWeapon();

      this.setWinner(this.player1.weapon, this.player2.weapon);
    }, 1000);

  }

  /********* End Actions  *******************/

  /*************** Methods  *****************/
  getRandomWeapon = () => {
    return weaponKeys[(weaponKeys.length * Math.random()) << 0];
  };

  setWinner = (weapon1, weapon2) => {
    console.log('set winner ')
    if (weapon1 === weapon2) return 0;
    if (weapons[weapon1].wins.some(wins => wins === weapon2)) { this.incrementPlayerScore(this.player1) }
    else { this.incrementPlayerScore(this.player2) }
  };

  incrementPlayerScore(player) {
    player.score = player.score + 1;
  }
  /*************** End Methods  *****************/
}

const gameStore = new GameStore();

///logs 
let loading, weapon, score;
autorun(() => {
  const { loading, weapon, score } = gameStore.player1;
  console.log(gameStore.player1.label);
  console.log(
    "loading: " + gameStore.player1.loading,
    "  |  weapon: " + gameStore.player1.weapon,
    "  |  score: " + gameStore.player1.score
  );
  console.log(gameStore.player2.label);
  console.log(
    "loading: " + gameStore.player2.loading,
    "  |  weapon: " + gameStore.player2.weapon,
    "  |  score: " + gameStore.player2.score
  );
});

export default gameStore;
