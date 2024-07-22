import React, { useState } from "react";
import classes from "./Toggle.module.css";

const Toggle = () => {
  const [isAdmin, setIsAdmin] = useState(true);
  const toggleHandler = () => {
    setIsAdmin(!isAdmin);
  };
  return (
    <>
      <button
        className={`${classes.button} ${
          isAdmin ? classes.admin : classes.consumer
        }`}
        onClick={toggleHandler}
      >
        {isAdmin ? "Admin" : "Consumer"}
      </button>
    </>
  );
};

export default Toggle;
