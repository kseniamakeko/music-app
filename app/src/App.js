import React, { useEffect, useState } from "react";
import Search from "./component/Search";
import Result from "./component/Result";
import Loader from "./UI/loader";

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
        const nameMatch = item.name
          .toLowerCase()
          .includes(inputSearch.toLowerCase());
        const autnorNameMatch = item.authorName
          .toLowerCase()
          .includes(inputSearch.toLowerCase());
        return nameMatch || autnorNameMatch;
      });
      setSearchResults(filteredResults);
    }
  };

  return (
    <div>
      <Search onSearch={handleSearch} />
      {loading ? <Loader /> : <Result results={searchResults} />}
    </div>
  );
}

export default App;
