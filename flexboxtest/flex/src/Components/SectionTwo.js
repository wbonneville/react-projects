import React, { Component } from "react";
import styled from "styled-components";

import image1 from "../images/city1.jpeg";

const SectionWrapper = styled.div`
  height: 850px;

  font-family: "Roboto";

  @media (max-width: 1025px) {
    height: 1300px;
  }
`;

const Watch = styled.div`
  margin-top: 5%;

  & h1 {
    font-size: 75px;
    color: #17263a;
  }
  & h4 {
    color: #17263a;
  }
`;

const ImageContainer = styled.div``;

const Image = styled.div`
  background-image: url(${image1});
  background-size: cover;
  height: 400px;
  width: 400px;
  margin-top: 15%;
  margin-right: 60px;
  margin-left: 60px;
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
          </Watch>
          <ImageContainer className="row center-xs">
            <div className="row">
              <div className="col-xs-12 col-lg-6">
                <Image></Image>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-lg-6">
                <Image></Image>
              </div>
            </div>
          </ImageContainer>
        </SectionWrapper>
      </React.Fragment>
    );
  }
}
