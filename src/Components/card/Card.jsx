import React from "react";
import "../card/card.css";

export const Card = ({ card, index, activeIndex }) => {
  return (
    <div
      className={
        index === activeIndex
          ? "card-container flex-center md-screen"
          : "card-container flex-center deactive"
      }
    >
      <div className="image-container">
        <img className="card-image" alt={card.title} src={card.image} />
      </div>
      <div className="card-details-container flex-center flex-column">
        <p className="card-title">{card.title}</p>
        <p className="card-content">{card.content}</p>
      </div>
    </div>
  );
};
