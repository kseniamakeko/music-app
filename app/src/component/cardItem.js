import React from "react";
import "./cardItem.css";

const CardItem = (props) => {
  const { image_url, name, authorName, createdAt, description } = props;
  const year = new Date(createdAt).getFullYear();

  return (
    <div className="itemCard">
      {image_url && <img src={`http://localhost:5000/${image_url}`} />}
      <div className="item-details">
        <h3>{name}</h3>
        <div className="item-details-subtitle">{authorName}</div>
        <div className="item-year">{year}</div>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default CardItem;
