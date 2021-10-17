import React from 'react';
import "./Card.css"

function Card(props) {
  return (<div className="card">
    <img src={props.path} alt={props.name}/>
    <p>{props.name}</p>
  </div>);
}

export default Card;
