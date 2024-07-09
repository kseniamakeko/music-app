import React from "react";
import "./Result.css";
import CardItem from "./cardItem";

const Result = ({ results }) => {
  return (
    <div className="result">
      {results.map((card) => (
        <div className="result-item" key={card.id}>
          <CardItem
            key={card.id}
            image_url={card.image_url}
            name={card.name}
            authorName={card.authorName}
            createdAt={card.createdAt}
            description={card.description}
          />
        </div>
      ))}
    </div>
  );
};

export default Result;
