import React from "react";
import classes from "./AlbumItem.module.css";

const AlbumItem = (item) => {
  return (
    <div className={classes.album_item}>
      <div className={classes.number}>
        <p>{item.number}</p>
      </div>
      <div className={classes.name}>
        <p>{item.name}</p>
      </div>
      <div className={classes.duration}>
        <p>{item.duration}</p>
      </div>
    </div>
  );
};

export default AlbumItem;
