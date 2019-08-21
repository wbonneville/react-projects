import React, { Component } from "react";
import { recipe } from "../tempDetails";
export default class RecipeDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recipe: {},
      url: `https://www.food2fork.com/api/get?key=0f888992f670fc1649857c6c2490cac6&q&rId=${
        this.props.id
      }
        `
    };
  }
  render() {
    return (
      <React.Fragment>
        <h1>Hello from Details</h1>
      </React.Fragment>
    );
  }
}
