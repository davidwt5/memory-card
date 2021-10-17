import React from "react";

function Scoreboard(props) {
  return (
    <div className="scoreboard">
      Score: {props.score} | Highscore: {props.highscore}
    </div>
  );
}

export default Scoreboard;
