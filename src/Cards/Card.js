import React from "react";
import Star from "./Star.js";
import "./Card.css";

function Card(props) {
  return (
      <div className="card-container">
        <img className="card-image" src={props.img} alt="" />
        <p className="nm">{props.name}</p>
        <div className="mini-container">
          <Star />
          <p className="op"> {props.oldPrice}</p>
          <h2 className="np">{props.newPrice}</h2>
        </div>
        <button className="btn">Add to cart</button>
      </div>
  );
}

export default Card;
