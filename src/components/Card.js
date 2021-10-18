import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div className="card" data-id={props.id} onClick={clickHandler}>
      <img src={props.path} alt={props.name} />
      <p>{props.name}</p>
    </div>
  );

  function clickHandler(e) {
    props.resolveCard(e.currentTarget.dataset.id);
  }
}

export default Card;
