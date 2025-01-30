import React, { useState, useEffect } from "react";
import Flashcard from "./cards/flashcard";
import "./flashcards.css";

function FlashcardsContainer() {
  const [recipes, setRecipe] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/recipes");
        const data = await response.json();
        setRecipe(data.recipes);
      } catch (error) {
        console.error("error fetch data:".error);
      }
    };
    fetchData();
  }, []);
  return (
    

    <div className="cardContainer">
      <Flashcard
      key= "1"
      id= "1"
      title= "Cheat's fish & chips" />
          <Flashcard
      key= "2"
      id= "2"
      title= "Halloumi eggy crumpets" />
          <Flashcard
      key= "2"
      id= "2"
      title= "Special scrambled eggs" />
          <Flashcard
      key= "2"
      id= "2"
      title= "My favourite speedy sausage pizza" />
          <Flashcard
      key= "2"
      id= "2"
      title= "Mushroom cannelloni" />
     
     
     
     
     
      {/* {recipes.map((recipe) => (
        <Flashcard 
        key={recipe.id}
        id = {recipe.id}
        title={ recipe.title}/>
      ))} */}
    </div>
  );
  
}

export default FlashcardsContainer;
