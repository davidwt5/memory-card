import React, { useEffect, useState } from "react";
import db from "./models/db.json";
import Card from "./components/Card";
import Header from "./components/Header";
import "./App.css";

function App() {
  const [cards, setCards] = useState(db.cards);

  // Shuffle cards once on startup
  useEffect(() => {
    shuffleCards();
  }, []);

  return (
    <div className="app">
      <Header shuffleCards={shuffleCards}/> 
      <div className="cards">
        {cards.map((card) => (
          <Card
            key={card.fileName}
            path={process.env.PUBLIC_URL + "cards/" + card.fileName}
            name={card.name}
          />
        ))}
      </div>
    </div>
  );

  function shuffleCards() {
    setCards(shuffleList(cards));
  }

  function shuffleList(list) {
    let listCopy = Array.from(list);
    const getRandomIndex = () => Math.floor(Math.random() * listCopy.length);
    const swap = (arr, i, j) => {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    };

    for (let i = 0; i < listCopy.length * 2; i++) {
      let i = getRandomIndex(),
        j = getRandomIndex();
      swap(listCopy, i, j);
    }

    return listCopy;
  }
}

export default App;
