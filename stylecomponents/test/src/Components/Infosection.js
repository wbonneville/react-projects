import React, { Component } from "react";

// import clipart2 from "./src/images/clipart2.png";

export default class Infosection extends Component {
  render() {
    return (
      <section id="info">
        <div className="container">
          <div className="row center-xs center-sm center-md center-lg middle-xs middle-sm middle-md middle-lg">
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <img className="clipart" alt="" />
            </div>
            <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <h2>Core Features</h2>
              <ul>
                <li>
                  <i class="fas fa-check" /> Fully Optimized
                </li>
                <li>
                  <i class="fas fa-check" /> Extreme Growth
                </li>
                <li>
                  <i class="fas fa-check" /> Improves Neighbours View
                </li>
                <li>
                  <i class="fas fa-check" /> Provides Overall Healthiness
                </li>
                <li>
                  <i class="fas fa-check" /> Grows Herbs
                </li>
                <li>
                  <i class="fas fa-check" /> Grows Vegetables
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
