import React, { Component } from "react";
import styled from "styled-components";

import image1 from "../images/city1.jpeg";

const SectionWrapper = styled.div`
  height: 900px;
  width: 100%;
  font-family: "Futura";

  @media (max-width: 1200px) {
    height: 1400px;
  }
`;

const Watch = styled.div`
  margin-top: 10%;

  & h1 {
    font-size: 70px;
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
  margin-right: 30px;
  margin-left: 30px;
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
            <ImageContainer className="row center-lg">
              <div className="col-xs-12 col-lg-6">
                <Image></Image>
              </div>
              <div className="col-xs-12 col-lg-6">
                <Image></Image>
              </div>
            </ImageContainer>
          </Watch>
        </SectionWrapper>
      </React.Fragment>
    );
  }
}
