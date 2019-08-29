import React, { Component } from "react";
import styled from "styled-components";

// SectionWrapper is quite hacky.
const SectionWrapper = styled.div`
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

  & .parent {
    float: left;
    clear: none;
    width: 100%;

    & .horizontal {
      float: left;
      display: inline-block;
      margin-left: 13.5%;
      margin-right: 13.5%;
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
        <div className="parent">
          <div className="horizontal">
            <p>Yes GMAN</p>
          </div>
          <div className="horizontal">
            <p>Yes GMAN</p>
          </div>
          <div className="horizontal">
            <p>Yes GMAN</p>
          </div>
        </div>
      </SectionWrapper>
    );
  }
}
