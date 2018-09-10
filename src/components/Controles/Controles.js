import React from "react";
import { observer, inject } from "mobx-react";
import classes from "./Controles.css";
import Button from "../Button/Button";

const controles = inject("game")(
  observer(props => {
    return (
      <footer className={classes.Container}>
        {props.game.mode === "vs" ? (
          <ul>
            {props.game.weaponKeys.map((weapon, index) => (
              <li key={index}>
                <Button styleName="btn1" value={weapon} />
              </li>
            ))}
          </ul>
        ) : (
          <ul>
            <li>
              <a href={null}>Play</a>
            </li>
          </ul>
        )}
      </footer>
    );
  })
);

export default controles;
