import React, { useEffect, useState } from "react";
import db from "./models/db.json";
import Card from "./components/Card";
import Header from "./components/Header";
import "./App.css";

function App() {
  const [cards, setCards] = useState(db.cards);
  const [selectedCards, setSelectedCards] = useState([]);
  const [score, setScore] = useState(0);
  const [highscore, setHighscore] = useState(0);

  // Shuffle cards once on startup
  useEffect(() => {
    setCards(shuffleList(cards));
  }, []);

  useEffect(() => {
    if(score > highscore) setHighscore(score);
  }, [score]);

  return (
    <div className="app">
      <Header score={score} highscore={highscore} resetGame={resetGame} />
      <div className="cards">
        {cards.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            path={process.env.PUBLIC_URL + "cards/" + card.fileName}
            name={card.name}
            resolveCard={resolveCard}
          />
        ))}
      </div>
    </div>
  );

  // Takes a cardId and performs actions depending on whether that card has been chosen before
  function resolveCard(cardId) {
    if (selectedCards.find((e) => e.id === cardId) === undefined) {
      const card = cards.find(e => e.id === cardId);
      setSelectedCards([...selectedCards, card]);
      setScore(score + 1);
      setCards(shuffleList(cards));
    } else {
      resetGame();
    }
  }

  function resetGame() {
    setCards(shuffleList(cards));
    setScore(0);
    setSelectedCards([]);
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
