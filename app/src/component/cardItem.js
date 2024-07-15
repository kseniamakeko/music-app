import React from "react";
import classes from "./CardItem.module.css";

const CardItem = (props) => {
  const { image_url, name, authorName, createdAt, description } = props;
  return (
    <div className={classes.itemCard}>
      {image_url && <img src={`http://localhost:5000/${image_url}`} />}
      <div className={classes.item_details}>
        <h3>{name}</h3>
        <div className={classes.item_details_subtitle}>{authorName}</div>
        <div className={classes.item_year}>
          {new Date(createdAt).getFullYear()}
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default CardItem;
