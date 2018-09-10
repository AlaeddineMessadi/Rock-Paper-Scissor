import React from "react";
import classes from "./Weapon.css";

import rock from "../../assets/weapons/rock.svg";
import paper from "../../assets/weapons/paper.svg";
import scissors from "../../assets/weapons/scissors.svg";
import question from "../../assets/weapons/question.svg";

// import Loading from 'components/Loading';

const weapon = props => {
  const choosenWeapon = () => {
    switch (props.type) {
      case "rock":
        return rock;
      case "paper":
        return paper;
      case "scissors":
        return scissors;
      default:
        return question;
    }
  };


  return (
    <div>
      <img src={choosenWeapon()} />
      <span>{props.type}</span>
    </div>
  );
};

// Weapon.propTypes = {
// 	icon: PropTypes.string,
// };

export default weapon;
