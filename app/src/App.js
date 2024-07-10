import React, { useEffect, useState } from "react";
import classes from "./App.module.css";
import Search from "./component/Search";
import Result from "./component/Result";
import CardItem from "./component/cardItem";

function App() {
  const [cards, setCards] = useState([]);
  const [showItem, setShowItem] = useState([]);
  const [searchResults, setSearchResults] = useState(cards);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const showItems = async () => {
      try {
        const res = await fetch("http://localhost:5000/albums");
        if (!res.ok) {
          throw new Error("it is impossible to connect! Check your Network");
        }
        const data = await res.json();
        setShowItem(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    showItems();
  }, []);

  const addCardsHandler = (card) => {
    setCards((prevCards) => {
      return [card, ...prevCards];
    });
  };

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
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {showItem.map((item, index) => (
            <div key={index} className={classes.itemCard}>
              <CardItem
                key={item.id}
                image_url={item.image_url}
                name={item.name}
                authorName={item.authorName}
                createdAt={item.createdAt}
                description={item.description}
              />
            </div>
          ))}
        </div>
      )}
      <Result results={searchResults} />
    </div>
  );
}

export default App;
