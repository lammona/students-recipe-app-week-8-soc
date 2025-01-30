import React, { useState, useEffect } from "react";
import Flashcard from "./cards/flashcard";
import "./flashcards.css";

function FlashcardsContainer({ recipes }) {
  const initialCards = [
    { id: "static1", title: "Cheat's fish & chips" },
    { id: "static2", title: "Halloumi eggy crumpets" },
    { id: "static3", title: "Special scrambled eggs" },
    { id: "static4", title: "My favourite speedy sausage pizza" },
    { id: "static5", title: "Mushroom cannelloni" },
  ];

  const [allCards, setAllCards] = useState([...initialCards]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/recipes");
        const data = await response.json();
        setAllCards([...initialCards, ...data]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (recipes.length > 0) {
      setAllCards([...initialCards, ...recipes]);
    }
  }, [recipes]);

  return (
    <div className="cardContainer">
      {allCards.map((card) => (
        <Flashcard
          key={card.id}
          id={card.id}
          title={card.title}
          ingredients={card.ingredients}
          instructions={card.instructions}
        />
      ))}
    </div>
  );
}

export default FlashcardsContainer;
