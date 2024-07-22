import React from "react";
import Toggle from "../UI/Toggle.js";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <section className={classes.header}>
      <h1 className={classes.title}>MusApp</h1>
      <Toggle />
    </section>
  );
};

export default Header;
