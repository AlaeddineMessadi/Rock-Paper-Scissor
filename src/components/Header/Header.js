import React from "react";
import { observer, inject } from "mobx-react";
import Button from "../Button/Button";
import classes from "./Header.css";

const header = inject("game")(
  observer(props => {

    const mode = props.game.mode;
    const label = props.game.modes[mode].label;

    return (
      <header className={ classes.header }>
        <h1 className={ classes.title }>Rock - Paper - Scissors</h1>
        <div className={ classes.mode }>

          <Button styleName="btn2" value="Switch Mode" onClick={ props.game.modeToggler } />
          <h2 className={ classes.sub_title }>{ label.toUpperCase() }</h2>
        </div>
      </header>
    );
  })
);

export default header;
