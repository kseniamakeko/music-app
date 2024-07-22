import React, { useState } from "react";
import Toggle from "../UI/Toggle.js";
import classes from "./Header.module.css";

const Header = () => {
  const [isAdmin, setIsAdmin] = useState(true);
  return (
    <section className={classes.header}>
      <h1 className={classes.title}>MusApp</h1>
      <Toggle isAdmin={isAdmin} setIsAdmin={setIsAdmin} />
    </section>
  );
};

export default Header;
