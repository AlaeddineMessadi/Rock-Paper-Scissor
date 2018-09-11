import React from "react";
import classes from "./Player.css";

import Weapon from "../Weapon/Weapon";

const player = ({ id, label, loading, weapon, score, order }) => {
  const displayOrder = classes.order1;
  console.log(order)
  return (
    <div className={ `${classes.player} ${(order === 3) ? classes.order3 : displayOrder}` } id={ id }>
      <div className={ classes.info }>
        <h3 className={ classes.label }>{ label }</h3>
        <p className={ classes.score }>Score: { score }</p>
      </div>
      <Weapon type={ weapon } loading={ loading } />
    </div>
  );
};

export default player;
