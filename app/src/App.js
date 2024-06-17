import React, { useState } from "react";
import "./App.css";
import CardItem from "./component/cardItem";
import Search from "./component/Search";
import Result from "./component/Result";

function App() {
  const cards = [
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
      setSearchResults(data.results);
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
    // <div>
    //   <CardItem
    //     key={cards[0].id}
    //     image={cards[0].image}
    //     title={cards[0].title}
    //     author={cards[0].author}
    //     date={cards[0].date}
    //     preview={cards[0].preview}
    //   />
    //   <CardItem
    //     key={cards[1].id}
    //     image={cards[1].image}
    //     title={cards[1].title}
    //     author={cards[1].author}
    //     date={cards[1].date}
    //     preview={cards[1].preview}
    //   />
    //   <CardItem
    //     key={cards[2].id}
    //     image={cards[2].image}
    //     title={cards[2].title}
    //     author={cards[2].author}
    //     date={cards[2].date}
    //     preview={cards[2].preview}
    //   />
    // </div>
  );
}

export default App;
