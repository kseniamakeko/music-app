import React from "react";
import classes from "./loader.module.css";

const Loader = () => {
  return (
    <div className={classes.main_loader}>
      <div className={classes.loader}></div>
    </div>
  );
};

export default Loader;
