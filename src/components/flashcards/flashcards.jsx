import React, { useState, useEffect } from "react";
import Flashcard from "./cards/flashcard";
import "./flashcards.css";

function FlashcardsContainer({ recipes }) {
  const initialCards = [
    { id: "static1", title: "Cheat's fish & chips",img:"https://asset.jamieoliver.com/images/cq7w2e71/production/3ade07c49cf82a6581f9ad59adf342d64c20a8e2-958x1280.jpg/109469682?rect=0,2,958,1277&w=1920&h=2560&fm=webp&q=80&fit=crop&auto=format", ingredients: "1 x 220g tin of pineapple rings in juice, 80g extra firm tofu, 2 mixed-colour peppers, olive oil, 4 spring onions, 4 cloves of garlic, 90g rice vermicelli noodles, 20g wasabi peas, 2 heaped teaspoons red miso paste", instructions: "Drain the pineapple juice into a bowl, then cut the tofu into 1cm cubes and add to the bowl. Halve, deseed and finely slice the peppers, then place in a large non-stick frying pan on a medium heat with 1 tablespoon of oil. Trim and finely slice the spring onions, adding to the pan as you go. Peel and finely slice the garlic, then add to the pan and cook for 5 minutes, or until softened, stirring regularly. Meanwhile, cook the noodles according to the packet instructions, then drain and refresh in cold water. Add the tofu and pineapple to the pan, then cook for 5 minutes, or until golden, stirring regularly. Add the miso paste and 200ml of water, then cook for a further 5 minutes, or until thickened, stirring regularly. Toss the noodles into the pan, then divide between plates. Bash the wasabi peas in a pestle and mortar until fine, then sprinkle over the top." },
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
          img={card.img}
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
