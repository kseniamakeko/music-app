import React from "react";
import classes from "./Album.module.css";
// import SongsList from "./SongsList";

const Album = ({ albumCard, onClick }) => {
  return (
    <div className={classes.album_card}>
      <button onClick={onClick}>Back</button>
      <img src={albumCard.image_url} />
      <h3>{albumCard.name}</h3>
      <h4>{albumCard.authorName}</h4>
      <p>{albumCard.createdAt}</p>
      <p>{albumCard.description}</p>
      {/* <div>
        <SongsList />
      </div> */}
    </div>
  );
};

export default Album;
