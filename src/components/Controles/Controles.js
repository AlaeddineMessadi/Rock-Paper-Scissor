import React from "react";
import { observer, inject } from "mobx-react";
import classes from "./Controles.css";
import Button from "../Button/Button";

const controles = inject("game")(
  observer(props => {
    const gameStore = props.game;
    return (
      <footer className={ classes.Container }>
        { gameStore.mode === "vs" ? (
          <ul>
            { gameStore.weaponKeys.map((weapon, index) => (
              <li key={ index }>
                <Button styleName="btn1" value={ weapon } onClick={() => gameStore.pickWeapon(weapon)}/>
              </li>
            )) }
          </ul>
        ) : (
            <ul>
              <li>
                <Button styleName="btn1" value="Play" onClick={gameStore.autoPlay} />
              </li>
            </ul>
          ) }
      </footer>
    );
  })
);

export default controles;
