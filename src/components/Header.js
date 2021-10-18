import React from "react";
import Scoreboard from "./Scoreboard";
import "./Header.css";

function Header(props) {
  function resetHandler() {
    props.shuffleCards();
  }

  return (
    <div className="header">
      <h1>Memory Game</h1>
      <Scoreboard score="0" highscore="10" />
      <button type="button" onClick={resetHandler}>
        Reset
      </button>
    </div>
  );
}

export default Header;
