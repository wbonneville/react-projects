import React, { Component } from 'react';
import './App.css';
import { recipes } from './tempList';
import RecipeList from './Components/RecipeList';
import RecipeDetails from './Components/RecipeDetails';

// set initial state
class App extends Component {
  state = {
    recipes: recipes,
    url:
      'https://www.food2fork.com/api/search?key=0f888992f670fc1649857c6c2490cac6&q',
    base_url:
      'https://www.food2fork.com/api/search?key=0f888992f670fc1649857c6c2490cac6&q',
    details_id: 35380,
    // each page has an index
    pageIndex: 1,
    search: '',
    query: '&q=',
    error: '',
  };

  async getRecipes() {
    // Function to get recipes from API
    try {
      // Try this function
      const data = await fetch(this.state.url); // Data is equal to the current state of the data from the URL
      const jsonData = await data.json(); // jsonData is equal to data
      // you cannot search without inputting something
      if (jsonData.recipes.length === 0) {
        this.setState(() => {
          return { error: 'sorry but this search is invalid' };
        });
        // show the recipes
      } else {
        this.setState(() => {
          return { recipes: jsonData.recipes };
        });
      }
    } catch (error) {
      // Report back with any erors
      console.log(error);
    }
  }

  // render the recipes when the component mounts
  componentDidMount() {
    this.getRecipes();
  }

  // display page method handler
  displayPage = index => {
    // take index for an arguement
    switch (index) {
      default:
      case 1:
        return (
          // assign props to RecipeList component
          <RecipeList
            recipes={this.state.recipes}
            // recipe details
            handleDetails={this.handleDetails}
            // value = to users search
            value={this.state.search}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            error={this.state.error}
          />
        );
      case 0:
        return (
          <RecipeDetails
            // if case 0, render the selected recipes details
            id={this.state.details_id}
            handleIndex={this.handleIndex}
          />
        );
    }
  };

  handleIndex = index => {
    this.setState({
      pageIndex: index,
    });
  };

  handleDetails = (index, id) => {
    this.setState({
      pageIndex: index,
      details_id: id,
    });
  };

  // search = to users input
  handleChange = e => {
    // set state of search = to target value
    this.setState({
      search: e.target.value,
    });
  };

  // on submit, prevent default page reloading
  handleSubmit = e => {
    e.preventDefault();
    // get base_url, query, and search props through destructuring
    console.log('hello from SUBMIT');
    const { base_url, query, search } = this.state;
    this.setState(
      () => {
        return { url: `${base_url}, ${query}, ${search}`, search: '' };
      },
      () => {
        // callback to load recipes
        this.getRecipes();
      },
    );
  };

  render() {
    console.log(this.state.recipes);

    return (
      // display the page (with the specific index)
      <React.Fragment> {this.displayPage(this.state.pageIndex)}</React.Fragment>
    );
  }
}

export default App;
