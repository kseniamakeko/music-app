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
            image={card.image}
            title={card.title}
            author={card.author}
            date={card.date}
            preview={card.preview}
          />
        </div>
      ))}
    </div>
  );
};

export default Result;
