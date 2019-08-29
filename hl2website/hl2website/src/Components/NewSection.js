import React, { Component } from "react";
import styled from "styled-components";

const SectionWrapper = styled.section`
  background-color: #313d52;
  width: 100%;
  height: 600px;
`;

export default class NewSection extends Component {
  render() {
    return (
      <SectionWrapper>
        <h1></h1>
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
