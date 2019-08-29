import React, { Component } from "react";
import styled from "styled-components";

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
    width: 100%;
    text-align: center;

    & .horizontal {
      width: 100px;
      display: inline-block;
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
