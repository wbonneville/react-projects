import React, { Component } from "react";
import styled from "styled-components";

const SectionWrapper = styled.div`
  height: 800px;
  width: 100%;
`;

export default class SectionTwo extends Component {
  render() {
    return (
      <SectionWrapper>
        <div className="row center-xs">
          <div className="col-xs-12">
            <h1>Watch</h1>
          </div>
        </div>
      </SectionWrapper>
    );
  }
}
