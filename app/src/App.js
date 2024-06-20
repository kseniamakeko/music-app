import React, { useState } from "react";
import "./App.css";
import CardItem from "./component/cardItem";
import Search from "./component/Search";
import Result from "./component/Result";
import SearchResult from "./component/Result";

const DAMMY_CARDS = [
  {
    id: "e1",
    image:
      "https://www.revolvermag.com/sites/default/files/styles/original_image__844px_x_473px_/public/media/section-media/master_cover.jpg?itok=L1JgJGah&timestamp=1508341064",
    title: "Master of pupets",
    author: "Metallica",
    date: new Date(1986, 3, 3),
    preview:
      "Master of Puppets is the third studio album by the American heavy metal band Metallica..."
  },
  {
    id: "e2",
    image: "https://m.media-amazon.com/images/I/61jCxw4EKbL._SL1000_.jpg",
    title: "Meds",
    author: "Placebo",
    date: new Date(2006, 3, 13),
    preview:
      "Meds is the fifth studio album by British alternative rock band Placebo."
  },
  {
    id: "e3",
    image: "https://i.ebayimg.com/images/g/z28AAOSwnQRiEPTH/s-l1600.webp",
    title: "Meteora",
    author: "Linkin Park",
    date: new Date(2003, 3, 25),
    preview:
      "Meteora is the second studio album by American rock band Linkin Park."
  }
];

function App() {
  const [cards, setCards] = useState(DAMMY_CARDS);
  const addCardsHandler = (card) => {
    setCards((prevCards) => {
      return [card, ...prevCards];
    });
  };
  const [searchResults, setSearchResults] = useState(cards);
  // const [loading, setLoading] = useState(false);

  // const handleSearch = async (query) => {
  //   setLoading(true);
  //   try {
  //     const res = await fetch("http://localhost:5000/albums");
  //     if (!res.ok) {
  //       throw new Error("it is impossible to connect! Check your Network");
  //     }
  //     const data = await res.json();
  //     setSearchResults(data.results);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    <div>
      <Search onSearch={handleInputChange} />
      {loading ? <p>Loading...</p> : <SearchResult results={SearchResult} />}
    </div>
  );
}

export default App;
