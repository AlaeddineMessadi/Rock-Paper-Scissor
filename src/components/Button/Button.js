import React from "react";
import classes from "./Button.css";

const button = props => {
  const styleName = props.styleName === "btn1" ? classes.btn : classes.btn+" "+classes.btn2;
  return <button className={styleName}>{props.value}</button>;
};

export default button;
