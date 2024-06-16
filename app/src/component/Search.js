import React, { useState } from "react";

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState(" ");

  const handleInputChange = (e) => {
    setQuery = [e.target.value];
  };

  const handleSearch = () => {
    onSearch(query);
  };
};
