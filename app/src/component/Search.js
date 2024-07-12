import React, { useState } from "react";
import classes from "./Search.module.css";
import Button from "../UI/Button";

const Search = ({ onSearch }) => {
  const [inputSearch, setInputSearch] = useState("");

  const handleChangeInputSearch = (event) => {
    setInputSearch(event.target.value);
  };

  const handleButtonClick = () => {
    onSearch(inputSearch);
    setInputSearch("");
  };

  return (
    <div className={classes.search}>
      <input
        type="text"
        value={inputSearch}
        onChange={handleChangeInputSearch}
        placeholder="Search for music..."
      />
      <Button onClick={handleButtonClick} />
    </div>
  );
};

export default Search;
