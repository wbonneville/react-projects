import React, { Component } from "react";

export default class RecipeSearch extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-8 mt-5 text-center">
              <h1 className="text-slanted text-capitalize">
                search for recipe with{" "}
                <strong className="text-danger">Food2Fork</strong>
              </h1>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
