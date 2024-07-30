import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
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

  const handleAlbumCreated = (newAlbum) => {
    setCards((prevAlbums) => [...prevAlbums, newAlbum]);
    setSearchResults((prevResults) => [...prevResults, newAlbum]);
  };

  const handleAlbumUpdate = (updateAlbum) => {
    setCards((prevAlbums) =>
      prevAlbums.map((album) =>
        album.id === updateAlbum.id ? updateAlbum : album
      )
    );
    setSearchResults((prevResults) =>
      prevResults.map((album) =>
        album.id === updateAlbum.id ? updateAlbum : album
      )
    );
  };

  return (
    <div>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Search onSearch={handleSearch} />
              {loading ? <Loader /> : <AlbumList results={searchResults} />}
            </div>
          }
        />

        <Route
          exact
          path="/album/add"
          element={<CreateAlbum onAlbumCreated={handleAlbumCreated} />}
        />
        <Route
          exact
          path="/album/:id/edit"
          element={
            <EditAlbum albumCards={cards} onUpdateAlbum={handleAlbumUpdate} />
          }
        />
        <Route exact path="/album/:id" element={<Album albumCards={cards} />} />
      </Routes>
    </div>
  );
}

export default App;
