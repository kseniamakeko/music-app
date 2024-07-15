import React from "react";
// import classes from "./AlbumItems.module.css";

const AlbumItem = (props) => {
  return (
    <div>
      <div className="">
        <p>{props.number}</p>
      </div>
      <div className="">
        <p>{props.name}</p>
      </div>
      <div className="">
        <p>{props.duration}</p>
      </div>
    </div>
  );
};

export default AlbumItem;
