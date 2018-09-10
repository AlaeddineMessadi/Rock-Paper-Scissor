import React from "react";
import { observer, inject } from "mobx-react";
import Button from "../Button/Button";
import classes from "./Header.css";

const header = inject("game")(
  observer(props => {

    const mode = props.game.mode;
    const  label = props.game.modes[mode].label;

    return (
      <header className={ classes.Header }>
        <h1 className={ classes.Title }>Rock - Paper - Scissors</h1>
        <div className={ classes.Mode }>

          <Button styleName="btn2" value="Switch Mode" click={ props.game.modeToggler } />
          <h2 className={ classes.subTitle }>{ label.toUpperCase() }</h2>
        </div>
      </header>
    );
  })
);

export default header;
