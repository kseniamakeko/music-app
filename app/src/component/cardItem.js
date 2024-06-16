import React from "react";
import "./cardItem.css";

function CardItem(props) {
  const { image, title, author, date, preview } = props;
  const year = date.getFullYear();

  return (
    <div className="itemCard">
      <img src={image} />
      <div className="item-details">
        <h3>{title}</h3>
        <p>{author}</p>
        <div className="item-year">{year}</div>
        <p>{preview}</p>
      </div>
    </div>
  );
}

export default CardItem;
