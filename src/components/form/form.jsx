import React, { useState } from "react";
import "./form.css";
import { use } from "react";

function Form({ dispatch }) {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newRecipe = { title, ingredients, instructions };

    const response = await fetch("http://localhost:5000/recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRecipe),
    });

    if (response.ok) {
      dispatch({
        type: "ADD_RECIPE",
        payload: newRecipe,
      });

      setTitle("");
      setIngredients("");
      setInstructions("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        placeholder="Recipe Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        className="title-entry"
      />
      <textarea
        placeholder="Ingredients"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        required
        className="fixed-textarea"
      />
      <textarea
        placeholder="Instructions"
        value={instructions}
        onChange={(e) => setInstructions(e.target.value)}
        required
        className="fixed-textarea"
      />
      <div className="button-container">
        <button type="submit" role="button">
          Add Recipe
        </button>
      </div>
    </form>
  );
}

export default Form;
