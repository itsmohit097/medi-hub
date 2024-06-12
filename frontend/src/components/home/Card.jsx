// Card.js
import React from "react";
import "./Card.css"; // Import the Card styles
const Card = ({ imageSrc, contributor, cont }) => (
  <div className="card">
    <div className="card-image-container">
      <img src={imageSrc} alt={contributor} className="card-image" />
    </div>
    <div className="card-text">{contributor}</div>
    <div className="card-text">{cont}</div>
  </div>
);

export default Card;
