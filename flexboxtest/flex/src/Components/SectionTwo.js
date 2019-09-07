import React, { Component } from "react";
import styled from "styled-components";

import image1 from "../images/city1.jpeg";

const SectionWrapper = styled.div`
  height: 800px;
  width: 100%;
  font-family: "Futura";
  @media (max-width: 1150px) {
    height: 1400px;
  }
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

const Image = styled.div`
  background-image: url(${image1});
  background-size: cover;
  height: 400px;
  width: 400px;
  margin-top: 15%;
`;

export default class SectionTwo extends Component {
  render() {
    return (
      <React.Fragment>
        <SectionWrapper>
          <Watch className="row center-xs">
            <div className="col-xs-12">
              <h1>Work</h1>
              <h4>
                Let us make a double harvest: one of agricultural success and
                one of ideological reform.
              </h4>
            </div>
            <div className="row center-xs">
              <div className="col-xs-12 col-lg-6">
                <Image></Image>
              </div>
              <div className="col-xs-12 col-lg-6">
                <Image></Image>
              </div>
            </div>
          </Watch>
        </SectionWrapper>
      </React.Fragment>
    );
  }
}
