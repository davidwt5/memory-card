import React from "react";

function Scoreboard(props) {
  return (
    <div className="scoreboard">
      <p>Score: {props.score}</p>
      <p>Highscore: {props.highscore}</p>
    </div>
  );
}

export default Scoreboard;
