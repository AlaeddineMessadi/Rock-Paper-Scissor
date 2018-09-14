import { observable, action, toJS } from "mobx";
import store from 'store';


import { modes, modeKeys } from "../constants/MODES";
import { weapons, weaponKeys } from "../constants/WEAPONS";



class GameStore {
  /** Observables */
  @observable
  mode = modeKeys[0];

  @observable
  loading = false;

  // player1 either Human or Bot
  @observable
  player1 = {
    label: modes[this.mode].player1Label,
    weapon: null,
    score: 0
  };

  // player2 is always a Bot
  @observable
  player2 = {
    label: modes[this.mode].player2Label,
    weapon: null,
    score: 0
  };

  @observable
  winner = null;

  @observable
  tie = false;

  @observable
  history = { mode: this.mode, records: [] };

  /******************* Actions  ****************/
  // Toggle Game Mode
  @action
  modeToggler = () => {
    this.mode =
      this.mode === modeKeys[0] ? modeKeys[1] : modeKeys[0];
    // reset 
    this.reset();
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
    this.player1.label = modes[this.mode].player1Label;
    this.player2.label = modes[this.mode].player2Label;
    this.history = { mode: this.mode, records: [] };
  }

  // Pick Weapon for user1 (Human) user2 is always Robot
  @action
  pickWeapon = (weapon) => {
    // reset tie
    if (this.tie) this.tie = false;
    this.loading = true;
    setTimeout(() => {
      this.loading = false;

      this.player1.weapon = weapon || this.getRandomWeapon();
      this.player2.weapon = this.getRandomWeapon();

      const winner = this.chooseWinner(this.player1.weapon, this.player2.weapon);

      // push to history
      this.pushResultInHistory(this.player1, this.player2, winner);

    }, 1000);
  }

  @action
  pushResultInHistory = (player1, player2, winner) => {

    this.history.records.push({
      player1: toJS(player1),
      player2: toJS(player2),
      winner,
    });

    // autosave history in the localStorage
    store.set('history', toJS(this.history));
  }

  // autosave in localstorage
  initHistory = () => {
    const existingHistory = store.get("history");

    if (existingHistory) {
      const lastRecord = existingHistory.records[existingHistory.records.length - 1];

      // update history from localStorage
      this.history = existingHistory;

      // update players score and weapon from localStorage
      this.player1 = lastRecord.player1;
      this.player2 = lastRecord.player2;

      // last mode selected
      this.mode = existingHistory.mode;
    }
  }

  /********* End Actions  *******************/

  /*************** Methods  *****************/
  getRandomWeapon = () => {
    return weaponKeys[(weaponKeys.length * Math.random()) << 0];
  };

  chooseWinner = (weapon1, weapon2) => {
    if (weapon1 === weapon2) {
      this.tie = true;
      return "tie";
    }
    return weapons[weapon1].wins.some(wins => wins === weapon2) ? this.incrementPlayerScore(this.player1) : this.incrementPlayerScore(this.player2);
  };

  // increment and return true
  incrementPlayerScore = (player) => {
    player.score = player.score + 1;
    return player.label;
  }
  /*************** End Methods  *****************/
}

// Initialize GameStore
const gameStore = new GameStore();


export default gameStore;
