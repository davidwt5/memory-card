import React from "react";
import Scoreboard from "./Scoreboard";
import "./Header.css";

function Header(props) {
  const { score, highscore, resetScore, shuffleCards } = props;
  return (
    <div className="header">
      <h1>Memory Game</h1>
      <Scoreboard score={score} highscore={highscore} />
      <button type="button" onClick={resetHandler}>
        Reset
      </button>
    </div>
  );

  function resetHandler() {
    shuffleCards();
    resetScore();
  }
}

export default Header;
