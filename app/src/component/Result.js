import React from "react";
import classes from "./Result.module.css";
import CardItem from "./CardItem";

const Result = ({ results }) => {
  return (
    <div className={classes.result}>
      {results.length > 0 ? (
        results.map((card) => (
          <CardItem
            key={card.id}
            image_url={card.image_url}
            name={card.name}
            authorName={card.authorName}
            createdAt={card.createdAt}
            description={card.description}
          />
        ))
      ) : (
        <p>No items found.</p>
      )}
    </div>
  );
};

export default Result;
