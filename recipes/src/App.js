import React, { Component } from "react";
import "./App.css";
import { recipes } from "./tempList";
import RecipeList from "./Components/RecipeList";
import RecipeDetails from "./Components/RecipeDetails";

class App extends Component {
  state = {
    recipes: recipes,
    url:
      "https://www.food2fork.com/api/search?key=0f888992f670fc1649857c6c2490cac6&q",
    details_id: 35382
  };

  // async getRecipes() {
  //   // Function to get recipes from API
  //   try {
  //     // Try this function
  //     const data = await fetch(this.state.url); // Data is equal to the current state of the data from the URL
  //     const jsonData = await data.json(); // jsonData is equal to data
  //     this.setState({
  //       // Set recipe state of jsonData.recipes
  //       recipes: jsonData.recipes
  //     });
  //   } catch (error) {
  //     // Report back with any erors
  //     console.log(error);
  //   }
  // }

  // componentDidMount() {
  //   this.getRecipes();
  // }

  render() {
    // console.log(this.state.recipes);

    return (
      <React.Fragment>
        {/* <RecipeList recipes={this.state.recipes} /> */}
        <RecipeDetails id={this.state.details_id} />
      </React.Fragment>
    );
  }
}

export default App;
