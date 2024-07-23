import React from "react";
import classes from "./CreateAlbum.module.css";

const CreateAlbum = () => {
  return (
    <>
      <form className={classes.from}>
        <label>
          name album
          <input type="text" />
        </label>
        <label>
          author
          <input type="text" />
        </label>
        <label>
          year
          <input type="number" />
        </label>
        <label>
          description
          <textarea />
        </label>
        <label>
          image
          <input type="file" />
        </label>
        <button>Create album</button>
      </form>
    </>
  );
};

export { CreateAlbum };
