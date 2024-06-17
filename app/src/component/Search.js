import React, { useState } from "react";
import "./Search.css";

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    onSearch(newQuery);
    console.log(newQuery);
  };

  return (
    <div className="search">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search for music..."
      />
      <button onClick={() => onSearch(query)}>Search</button>
    </div>
  );
};

export default Search;
