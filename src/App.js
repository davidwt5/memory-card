import React from "react";
import db from "./models/db.json";
import Card from "./components/Card";
import Scoreboard from "./components/Scoreboard";

function App() {
  return (
    <div className="App">
      {db.cards.map((card) => (
        <Card
          key={card.fileName}
          path={process.env.PUBLIC_URL + "cards/" + card.fileName}
          name={card.name}
        />
      ))}
      <Scoreboard score="0" highscore="10" />
    </div>
  );
}

export default App;
