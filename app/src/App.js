import "./App.css";
import CardItem from "./component/cardItem";

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
        "Master of Puppets is the third studio album by the American heavy metal band Metallica...",
    },
    {
      id: "e2",
      image:
        "https://www.revolvermag.com/sites/default/files/styles/original_image__844px_x_473px_/public/media/section-media/master_cover.jpg?itok=L1JgJGah&timestamp=1508341064",
      title: "Meds",
      author: "Placebo",
      date: new Date(2006, 3, 13),
      preview:
        "Meds is the fifth studio album by British alternative rock band Placebo.",
    },
  ];
  return (
    <div>
      <CardItem
        key={cards[0].id}
        image={cards[0].image}
        title={cards[0].title}
        author={cards[0].author}
        date={cards[0].date}
        preview={cards[0].preview}
      />
      <CardItem
        key={cards[1].id}
        image={cards[1].image}
        title={cards[1].title}
        author={cards[1].author}
        date={cards[1].date}
        preview={cards[1].preview}
      />
    </div>
  );
}

export default App;
