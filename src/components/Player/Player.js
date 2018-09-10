import React from "react";
import classes from "./Player.css";

import Weapon from "../Weapon/Weapon";

const player = ({ label, weapon, score }) => {
  return (
    <div className={classes.Player}>
      <div>
        <span className={classes.label}>{label}</span>
      </div>
      <Weapon type={weapon} />
      <div>
        <span className="score">{score}</span>
      </div>
    </div>
  );
};

export default player;
