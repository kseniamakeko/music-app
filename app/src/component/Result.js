import React from "react";
import classes from "./Result.module.css";
import CardItem from "./cardItem";

const Result = ({ results }) => {
  return (
    <div className={classes.result}>
      {results.map((card) => (
        <CardItem
          key={card.id}
          image_url={card.image_url}
          name={card.name}
          authorName={card.authorName}
          createdAt={card.createdAt}
          description={card.description}
        />
      ))}
    </div>
  );
};

export default Result;
