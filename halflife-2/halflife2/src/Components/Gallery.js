import React, { Component } from "react";

export default class Gallery extends Component {
  render() {
    return (
      <React.Fragment>
        <div class="content">
          <div class="content-title">
            <h2>What Is This</h2>
            <div class="border">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <p class="content-desc">
            Half-Life 2 (stylized as HλLF-LIFE2) is a first-person shooter video
            game developed and published by Valve Corporation. It is the sequel
            to 1998's Half-Life and was released in November 2004 following a
            five-year $40 million development.
          </p>
        </div>
      </React.Fragment>
    );
  }
}
