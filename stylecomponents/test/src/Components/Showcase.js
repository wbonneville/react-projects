import React, { Component } from "react";

export default class Showcase extends Component {
  render() {
    return (
      <section id="showcase">
        <div className="container">
          <div className="row center-xs center-sm center-md center-lg middle-xs middle-sm middle-md middle-lg">
            <div className="col-xs-14 col-sm-12 col-md-9 col-lg-9 showcase-content">
              <h1>
                Welcome to <span className="primary-text1">Plant Life Sim</span>
              </h1>
              <p>
                Learn how to turn your garden into a monolithic rainforest.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
