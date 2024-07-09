import React, { useState } from "react";
import "./App.css";
import CardItem from "./component/cardItem";
import Search from "./component/Search";
import Result from "./component/Result";

function App() {
  // const [cards, setCards] = useState(DAMMY_CARDS);
  const [cards, setCards] = useState([]);
  const addCardsHandler = (card) => {
    setCards((prevCards) => {
      return [card, ...prevCards];
    });
  };
  const [searchResults, setSearchResults] = useState(cards);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (query) => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/albums");
      if (!res.ok) {
        throw new Error("it is impossible to connect! Check your Network");
      }
      const data = await res.json();
      setSearchResults(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Search onSearch={handleSearch} />
      {loading ? <p>Loading...</p> : <Result results={searchResults} />}
    </div>
  );
}

export default App;
