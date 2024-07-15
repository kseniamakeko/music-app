import React from "react";
// import classes from "AlbumCard.module.css";
import AlbumList from "./AlbumList";

const AlbumCard = ({ albumCard }) => {
  return (
    <div className="">
      <img src={albumCard.image_url} />
      <h3>{albumCard.name}</h3>
      <h4>{albumCard.authorName}</h4>
      <p>{albumCard.createdAt}</p>
      <p>{albumCard.description}</p>
      <div>
        <AlbumList />
      </div>
    </div>
  );
};

export default AlbumCard;
