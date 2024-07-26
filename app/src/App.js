import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import AlbumList from "./Component/AlbumList/AlbumList";
import Search from "./Component/AlbumList/Search";
import Loader from "./Component/UI/Loader";
import Album from "./Component/Album/Album";
import Header from "./Component/Header/Header";
import { CreateAlbum } from "./Component/EditAlbum/CreateAlbum";
import { EditAlbum } from "./Component/EditAlbum/EditAlbum";

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
        const nameMatch =
          item.name &&
          item.name.toLowerCase().includes(inputSearch.toLowerCase());
        const authorNameMatch =
          item.authorName &&
          item.authorName.toLowerCase().includes(inputSearch.toLowerCase());

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
    <Router>
      <div>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Search onSearch={handleSearch} />
                {loading ? (
                  <Loader />
                ) : (
                  <AlbumList
                    results={searchResults}
                    onCardClick={handlerCardClick}
                  />
                )}
              </div>
            }
          />
          <Route exact path="/album/add" element={<CreateAlbum />} />
          <Route
            exact
            path="/album/:id/edit"
            element={<EditAlbum albumCards={cards} />}
          />
          <Route
            exact
            path="/album/:id"
            element={
              <Album albumCard={selectedCard} onClick={handleBackClick} />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
