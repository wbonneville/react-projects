import React, { Component } from "react";
import styled from "styled-components";

const ShowcaseStyle = styled.div`
  border-bottom: 1px solid #3d8d62;
  margin-bottom: 30px;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.1)),
    url("../images/unsplash6.jpg") no-repeat center center;
  background-position: top;

  & row {
    height: 600px;
  }

  & h1 {
    font-size: 50px;
    margin: zero;
    margin-bottom: 20px;
    color: white;
  }
`;

export default class Showcase extends Component {
  render() {
    return (
      <ShowcaseStyle>
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
      </ShowcaseStyle>
    );
  }
}
