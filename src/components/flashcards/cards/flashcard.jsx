import React, { useState } from "react";
import "./flashcard.css";

function Flashcard({ title, ingredients, instructions }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={`flashcard ${isFlipped ? "flipped" : ""}`}
      onClick={handleClick}
    >
      <div className="flashcard-front">
        <span className="flashcard-text">{title}</span>
      </div>
      <div className="flashcard-back">
        <span className="flashcard-text">
          Ingredients: {ingredients}
          <br />
          Instructions: {instructions}
        </span>
      </div>
    </div>
  );
}
export default Flashcard;
