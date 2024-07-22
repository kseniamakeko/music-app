import React from "react";

const CreateAlbum = () => {
  return (
    <>
      <form>
        <label>
          Name
          <input />
        </label>
        <label>
          Author
          <input />
        </label>
        <label>
          Year
          <input />
        </label>
        <label>
          description
          <textarea />
        </label>
      </form>
    </>
  );
};

export { CreateAlbum };
