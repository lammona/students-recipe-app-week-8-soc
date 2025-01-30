const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
server.listen(5000, () => {
  console.log("JSON Server is running on port 5000");
});

const handleSubmit = async (e) => {
  e.preventDefault();
  const newRecipe = { title, ingredients, instructions };

  const response = await fetch("http://localhost:5000/recipes", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newRecipe),
  });

  if (response.ok) {
    dispatch({ type: "ADD_RECIPE", payload: newRecipe });
    setTitle("");
    setIngredients("");
    setInstructions("");
  }
};
