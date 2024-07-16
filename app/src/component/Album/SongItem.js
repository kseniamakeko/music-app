import React from "react";
import classes from "./SongItem.module.css";

const SongItem = ({ id, name, duration }) => {
  return (
    <div className={classes.album_item}>
      <div className={classes.title} />
      <div>{id}</div>
      <div className={classes.name}>
        <p>{name}</p>
      </div>
      <div className={classes.duration}>
        <p>{duration}</p>
      </div>
    </div>
  );
};

export default SongItem;
