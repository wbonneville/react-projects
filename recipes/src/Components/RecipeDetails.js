import React, { Component } from "react";
import { recipe } from "../tempDetails";
export default class RecipeDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recipe: recipe,
      url: `https://www.food2fork.com/api/get?key=0f888992f670fc1649857c6c2490cac6&q&rId=${
        this.props.id
      }
        `
    };
  }
  render() {
    const {
      image_url,
      publisher,
      publisher_url,
      source_url,
      title,
      ingredients
    } = this.state.recipe;
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-6 my-3">
              <button
                type="button"
                className="btn btn-warning mb-5 text-capitalize"
              >
                Back to recipe list
              </button>
              <img src={image_url} className="d-block w-100" alt="recipe" />
            </div>
            {/* details */}
            <div className="col-10 mx-auto col-md-6 my-3">
              <h6 className="text-uppercase">{title}</h6>
              <h6 className="text-warning text-capitalize text-slanted">
                provided by {publisher}
              </h6>
              <a
                href={publisher_url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary mt-2 text-capitalize"
              >
                publisher webpage
              </a>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
