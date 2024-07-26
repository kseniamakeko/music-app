import React from "react";
import classes from "./Button.module.css";

const Button = ({ onClick }) => {
  return (
    <button className={classes.button} onClick={onClick}>
      Search
    </button>
  );
};

export default Button;
