import React from "react";
// import classes from "./SongsList.module.css";

import SongItem from "./SongItem";

const SongsList = (props) => {
  return (
    <ul className="">
      {props.items.map((item) => (
        <SongItem
          key={item.id}
          albumId={item.id}
          name={item.name}
          duration={item.duration}
        />
      ))}
    </ul>
  );
};

export default SongsList;
