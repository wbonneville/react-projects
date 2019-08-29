import React, { Component } from "react";
import styled from "styled-components";

const SectionWrapper = styled.section`
  background-color: #313d52;
  width: 100%;
  height: 600px;
  font-family: "Roboto";

  & h1 {
    padding-top: 62px;
    padding-left: 40px;
    color: white;
    font-size: 50px;

    & .spanOne,
    .spanTwo {
      color: #b96835;
    }
  }

  & .headerOne {
    text-align: center;
    display: inline-block;
  }
`;

export default class NewSection extends Component {
  render() {
    return (
      <SectionWrapper>
        <h1>
          Leading City 17's structural policies to advance the{" "}
          <span className="spanOne">interests</span> and
          <span className="spanTwo"> security</span> of all entities.
        </h1>
        <hr></hr>
        <div className="headers">
          <div className="headerOne">
            <h2>
              Travel
              <hr></hr>
            </h2>
          </div>
          <div className="headerTwo">
            <h2>
              Based
              <hr></hr>
            </h2>
          </div>
          <div className="headerThree">
            <h2>
              Lettuce
              <hr></hr>
            </h2>
          </div>
        </div>
        <div>
          <h3>One</h3>
          <h3>Two</h3>
          <h3>Three</h3>
          <h3>One</h3>
          <h3>Two</h3>
          <h3>Three</h3>
          <h3>One</h3>
          <h3>Two</h3>
        </div>
      </SectionWrapper>
    );
  }
}
