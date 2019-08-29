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
      width: 200px;
      display: inline-block;
      color: white;
    }
  }

  & hr {
    color: #b96835;
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
        <br></br>
        <hr></hr>
        <br></br>
        <div className="parent">
          <div className="horizontal">
            <h1>Yes GMAN</h1>
          </div>
          <div className="horizontal">
            <h1>Yes GMAN</h1>
          </div>
          <div className="horizontal">
            <h1>Yes GMAN</h1>
          </div>
        </div>
      </SectionWrapper>
    );
  }
}
