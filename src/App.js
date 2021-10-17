import React from "react";
import db from "./models/db.json";
import Card from "./components/Card";
import Header from "./components/Header"
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="cards">
        {db.cards.map((card) => (
          <Card
            key={card.fileName}
            path={process.env.PUBLIC_URL + "cards/" + card.fileName}
            name={card.name}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
