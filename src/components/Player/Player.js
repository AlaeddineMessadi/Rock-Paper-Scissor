import React from "react";
import classes from "./Player.css";

import Weapon from "../Weapon/Weapon";

const player = ({ label, loading, weapon, score }) => {
  return (
    <div className={ classes.player }>
      <Weapon type={ weapon } loading={ loading } />
      <div className={ classes.info }>
        <span className={ classes.label }>{ label }</span>
        <span className={ classes.score }>{ score }</span>
      </div>
    </div>
  );
};

export default player;
