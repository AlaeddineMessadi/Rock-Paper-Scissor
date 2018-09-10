import React from "react";
import { observer, inject } from "mobx-react";
import Button from "../Button/Button";
import classes from "./Header.css";

const header = inject("game")(
  observer(props => {

    console.log(props.game.modes);
    console.log(props.game.mode)
    return (
      <header className={classes.Header}>
        <h1 className={classes.Title}>Rock - Paper - Scissors</h1>
        <div className={classes.Mode}>

            <Button styleName="btn2" value="Switch Mode"/>
            <h2 className={classes.subTitle}>{props.game.mode.toUpperCase()}</h2>
        </div>
      </header>
    );
  })
);

export default header;
