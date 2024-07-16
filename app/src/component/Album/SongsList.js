import React from "react";
// import classes from "./SongsList.module.css";

import SongItem from "./SongItem";

const SongsList = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <SongItem
          key={item.id}
          id={item.id}
          albumId={item.albumId}
          name={item.name}
          duration={item.duration}
        />
      ))}
    </ul>
  );
};

export default SongsList;
