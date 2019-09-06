import React, { Component } from "react";
import styled from "styled-components";

const SectionWrapper = styled.div`
  height: 800px;
  width: 100%;
  font-family: "Futura";
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

const Video = styled.div``;

export default class SectionTwo extends Component {
  render() {
    return (
      <SectionWrapper>
        <Watch className="row center-xs">
          <div className="col-xs-12">
            <h1>Work</h1>
            <h4>
              Let us make a double harvest: one of agricultural success and one
              of ideological reform.
            </h4>
          </div>
        </Watch>
        <Video></Video>
      </SectionWrapper>
    );
  }
}
