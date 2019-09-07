import React, { Component } from "react";
import styled from "styled-components";

const SectionWrapper = styled.div`
  height: 800px;
  width: 100%;
  font-family: "Futura";
  background-color: #ee9079;
`;

const Watch = styled.div`
  margin-top: 8%;

  & h1 {
    font-size: 70px;
    color: #17263a;
  }
  & h4 {
    color: #17263a;
  }
`;

export default class SectionTwo extends Component {
  render() {
    return (
      <React.Fragment>
        <SectionWrapper>
          <div className="row center-xs"></div>
          <div className="row center-xs"></div>
        </SectionWrapper>
      </React.Fragment>
    );
  }
}
