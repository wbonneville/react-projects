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
        <div>
          <h2>
            <hr></hr>
          </h2>
          <h2>
            <hr></hr>
          </h2>
          <h2>
            <hr></hr>
          </h2>
          <h3></h3>
          <h3></h3>
          <h3></h3>
          <h3></h3>
          <h3></h3>
          <h3></h3>
          <h3></h3>
          <h3></h3>
        </div>
      </SectionWrapper>
    );
  }
}
