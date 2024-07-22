import React, { useState } from "react";
import { Link } from "react-router-dom";
import Toggle from "../UI/Toggle.js";
import classes from "./Header.module.css";

const Header = () => {
  const [isAdmin, setIsAdmin] = useState(true);
  return (
    <section className={classes.header}>
      <h1 className={classes.title}>MusApp</h1>
      {isAdmin && <Link to="/album/add">Add New Album</Link>}
      <Toggle isAdmin={isAdmin} setIsAdmin={setIsAdmin} />
    </section>
  );
};

export default Header;
