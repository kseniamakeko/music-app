import React, { useEffect, useState } from "react";
import classes from "./Search.module.css";

const Search = ({ onSearch }) => {
  const [inputSearch, setInputSearch] = useState("");

  const handleChangeInputSearch = (event) => {
    setInputSearch(event.target.value);
  };

  useEffect(() => {
    onSearch(inputSearch);
  }, [inputSearch]);

  const handleDeleteSearchInput = (inputSearch) => {
    setInputSearch(null);
  };

  return (
    <div className={classes.search_wrapper}>
      <div className={classes.search}>
        <input
          type="text"
          value={inputSearch}
          onChange={handleChangeInputSearch}
          placeholder="Search for music..."
        />
        <button onClick={handleChangeInputSearch}>X</button>
      </div>
    </div>
  );
};

export default Search;
