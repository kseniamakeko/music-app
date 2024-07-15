import React from "react";
// import classes from "./AlbumList.module.css";
import AlbumItem from "./AlbumItem";

const AlbumList = (props) => {
  return (
    <ul className="">
      {props.items.map((item) => (
        <AlbumItem
          key={item.id}
          name={item.name}
          number={item.number}
          duration={item.duration}
        />
      ))}
    </ul>
  );
};

export default AlbumList;
