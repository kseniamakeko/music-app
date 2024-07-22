import React, { useState } from "react";
import classes from "./Toggle.module.css";

const Toggle = () => {
  const [isAdmin, setIsAdmin] = useState(true);
  const toggleHandler = () => {
    setIsAdmin(!isAdmin);
  };
  return (
    <>
      <div className={classes.button_container}></div>
      <button
        className={`button ${isAdmin ? "admin" : "consumer"}`}
        onClick={toggleHandler}
      >
        {isAdmin ? "Admin" : "Consumer"}
      </button>
    </>
  );
};

export default Toggle;
