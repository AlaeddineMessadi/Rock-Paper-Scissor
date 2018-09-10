import React from "react";
import { observer, inject } from "mobx-react";
import Button from "../Button/Button";
import classes from "./Header.css";

const header = inject("game")(
  observer(props => {
    return (
      <header className={classes.Header}>
        <h1 className={classes.Title}>Rock - Paper - Scissors</h1>
        <div className={classes.Mode}>
          <a className={classes.btnPlay}>
            <h2>{props.game.mode.toUpperCase()}</h2>
          </a>
          <div>
            <Button styleName="btn2" value={props.game.mode}/>
          </div>
        </div>
      </header>
    );
  })
);

export default header;
