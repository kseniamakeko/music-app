import React, { useEffect, useState } from "react";
import Search from "./Component/Search";
import Result from "./Component/Result";
import Loader from "./Component/UI/Loader";
import AlbumCard from "./Component/AlbumCards/AlbumCard";

function App() {
  const [cards, setCards] = useState([]);
  const [searchResults, setSearchResults] = useState(cards);
  const [loading, setLoading] = useState(true);
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await fetch("http://localhost:5000/albums");
        if (!res.ok) {
          throw new Error("it is impossible to connect! Check your Network");
        }
        const data = await res.json();
        setCards(data);
        setSearchResults(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchItems();
  }, []);

  const handleSearch = (inputSearch) => {
    if (inputSearch === "") {
      setSearchResults(cards);
    } else {
      const filteredResults = cards.filter((item) => {
        const nameMatch = item.name
          .toLowerCase()
          .includes(inputSearch.toLowerCase());
        const authorNameMatch = item.authorName
          .toLowerCase()
          .includes(inputSearch.toLowerCase());

        return nameMatch || authorNameMatch;
      });
      setSearchResults(filteredResults);
    }
  };

  const handlerCardClick = (albumCard) => {
    setSelectedCard(albumCard);
  };

  const handleBackClick = () => {
    setSelectedCard(null);
  };

  return (
    <div>
      {selectedCard ? (
        <AlbumCard albumCard={selectedCard} onClick={handleBackClick} />
      ) : (
        <div>
          <Search onSearch={handleSearch} />
          {loading ? (
            <Loader />
          ) : (
            <Result results={searchResults} onCardClick={handlerCardClick} />
          )}
        </div>
      )}
    </div>
  );
}

export default App;
