import { Link } from "react-router-dom";
import React from "react";
import classes from "./AlbumList.module.css";
import AlbumItem from "./AlbumItem";

const AlbumList = ({ results = [] }) => {
  return (
    <div className={classes.results}>
      {results.length > 0 ? (
        results.map((card) => (
          <Link
            className={classes.no_underline}
            key={card.id}
            to={`/album/${card.id}`}
          >
            <AlbumItem
              image_url={card.image_url}
              name={card.name}
              authorName={card.authorName}
              createdAt={card.createdAt}
              description={card.description}
            />
          </Link>
        ))
      ) : (
        <p>No items found.</p>
      )}
    </div>
  );
};

export default AlbumList;
