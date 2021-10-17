import React from "react";
import Scoreboard from "./Scoreboard";
import "./Header.css"

function Header() {
  return (
    <div className="header">
      <h1>Memory Game</h1>
      <Scoreboard score="0" highscore="10" />
    </div>
  );
}

export default Header;