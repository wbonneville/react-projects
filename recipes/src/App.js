import React from "react";
import "./App.css";
import { recipes } from "./tempList";
import RecipeList from "./Components/RecipeList";
import RecipeDetails from "./Components/RecipeDetails";

class App extends Component {
  state = {
    recipes: [],
    url:
      "https://www.food2fork.com/api/search?key=0f888992f670fc1649857c6c2490cac6&q"
  };

  async getRecipes() {}

  render() {
    return (
      <React.Fragment>
        <RecipeList /> <RecipeDetails />
      </React.Fragment>
    );
  }
}

export default App;
