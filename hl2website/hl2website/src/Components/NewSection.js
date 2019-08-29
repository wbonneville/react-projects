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
    font-size: 40px;

    & .spanOne,
    .spanTwo {
      color: #b96835;
    }
  }

  & .parent {
    width: 100%;
    text-align: center;

    & .horizontal {
      width: 350px;
      display: inline-block;
      color: white;
    }
  }

  & h2 {
    font-size: 20px;
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
            <h2>Immigration</h2>
          </div>
          <div className="horizontal">
            <h2>On Dr. Breen</h2>
          </div>
          <div className="horizontal">
            <h2>Working at State</h2>
          </div>
        </div>
      </SectionWrapper>
    );
  }
}
