import { Routes, Route, Link } from "react-router-dom";

import { AlbumList } from "./component/AlbumList/AlbumList";
import { Album } from "./component/Album/Album";

import React, { useEffect, useState } from "react";
import Search from "./Component/AlbumList/Search";
import AlbumList from "./Component/AlbumList/AlbumList";
import Loader from "./Component/UI/Loader";
import Album from "./Component/Album/Album";
import { Router } from "express";

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
        <Album albumCard={selectedCard} onClick={handleBackClick} />
      ) : (
        <div>
          <Search onSearch={handleSearch} />
          {loading ? (
            <Loader />
          ) : (
            <AlbumList results={searchResults} onCardClick={handlerCardClick} />
          )}
        </div>
      )}
      <Routes>
        <Route path="/" element={<AlbumList />} />
        <Route path="/Album/id" element={<Album />} />
      </Routes>
    </div>
  );
}

export default App;
