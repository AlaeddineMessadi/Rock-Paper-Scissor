import React from "react";
import classes from "./Player.css";

import Weapon from "../Weapon/Weapon";

const player = ({ label, loading, weapon, score }) => {
  return (
    <div className={ classes.player }>
          <div className={ classes.info }>
        <h3 className={ classes.label }>{ label }</h3>
        <p className={ classes.score }>Score: { score }</p>
      </div>
      <Weapon type={ weapon } loading={ loading } />
    </div>
  );
};

export default player;
