import React, { useState } from "react";
import "./flashcard.css";

function Flashcard({ title, ingredients, instructions, img }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
    setIsClicked(!isClicked);
  };

  return (
    <div 
    className={`flashcard ${isFlipped ? "flipped" : ""} ${isClicked ? "clicked" : ""}`}
    onClick={handleClick}   >
   
      <div className="flashcard-front" img src={img} alt="placeholder">
        <span className="flashcard-text">{title}</span>
        
      </div>
      <div className="flashcard-back">
        <span className="flashcard-text">
        <span className="flashcard-text">{title}</span>
          <br />

          Ingredients: {ingredients}
          <br />
          <br />
          Instructions: {instructions}
        </span>
      </div>
    </div>
  );
}
export default Flashcard;
