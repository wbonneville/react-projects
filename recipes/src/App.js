import React from "react";
import "./App.css";
import { recipes } from "./tempList";
import RecipeList from "./Components/RecipeList";
import RecipeDetails from "./Components/RecipeDetails";

function App() {
  return (
    <React.Fragment>
      <RecipeList /> <RecipeDetails />
    </React.Fragment>
  );
}

export default App;
