import React, { Component } from "react";
import pic1 from "../images/pic1.jpg";

export default class Header extends Component {
  render() {
    return (
      <div class="wrapper">
        <div class="slide">
          <div class="header">
            <img
              class="logo"
              src={pic1}
              //   style="max-width:100%;height:auto;"
            />
            <div class="menu">
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Team</a>
                </li>
                <li>
                  <a href="#">Portfolio</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="slideTitle">
            <h1>Half-Life 2 </h1>
            <p>
              "...This is how it always starts. First a building, then the whole
              block."
            </p>
          </div>
        </div>
      </div>
    );
  }
}
