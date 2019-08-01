import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="container">
          <div className="row end-sm end-md end-lg center-xs center-sm center-md center-lg middle-xs middle-sm middle-md middle-lg">
            <div className="col-xs-12 col-sm-2 col-md-2 col-lg-2">
              <h1>
                <span className="primary-headertext">Plant</span>Theme
              </h1>
            </div>
            <div className="col-xs-12 col-sm-10 col-md-10 col-lg-10">
              <div id="navbar">
                <ul>
                  <li className="current">
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <a href="about.html">About</a>
                  </li>
                  <li>
                    <a href="services.html">Services</a>
                  </li>
                  <li>
                    <a href="contact.html">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
