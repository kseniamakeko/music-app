import React from "react";
import classes from "./AlbumList.module.css";
import AlbumItem from "./AlbumItem";

const AlbumList = ({ results = [], onCardClick }) => {
  return (
    <div className={classes.result}>
      {results.length > 0 ? (
        results.map((card) => (
          <AlbumItem
            key={card.id}
            image_url={card.image_url}
            name={card.name}
            authorName={card.authorName}
            createdAt={card.createdAt}
            description={card.description}
            onClick={() => onCardClick(card)}
          />
        ))
      ) : (
        <p>No items found.</p>
      )}
    </div>
  );
};

export default AlbumList;
