import React from "react";
import Card from "./components/Card";
import Scoreboard from "./components/Scoreboard";

function App() {
  return (
    <div className="App">
      <Card path={process.env.PUBLIC_URL + 'cards/hakos-baelz.webp'} name="Hakos Baelz"/>
      <Scoreboard score="0" highscore="10"/>
    </div>
  );
}

export default App;
