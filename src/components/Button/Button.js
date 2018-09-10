import React from "react";
import classes from "./Button.css";


const button = props => {
  const styleName = props.styleName === "btn1" ? classes.btn1 : classes.btn2;
  return <button className={ `${classes.btn} ${styleName}` } onClick={ props.onClick }>{ props.value }</button>;
};

export default button;
