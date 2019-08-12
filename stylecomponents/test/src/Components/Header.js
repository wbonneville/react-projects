import React, { Component } from "react";
import styled from "styled-components";

import Anchor from "./Anchor";

const Navbar = styled.section`
  text-transform: uppercase;

  & li {
    display: inline;
    padding-right: 20px;
    list-style: none;
  }

  & a {
    text-decoration: none;
    color: #888;
  }

  & li.current a,
  & a:hover {
    color: #56a79a;
    border-bottom: 3px solid #3d8d62;
    padding-bottom: 3px;
  }
`;

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
              <Navbar>
                <ul>
                  <li className="current">
                    <Anchor href="index.html">Home</Anchor>
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
              </Navbar>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
