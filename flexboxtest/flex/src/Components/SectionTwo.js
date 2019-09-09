import React, { Component } from "react";
import styled from "styled-components";

import image1 from "../images/factory.jpeg";
import image2 from "../images/factory2.png";

const SectionWrapper = styled.div`
  margin-top: 5%;
  font-family: "SF-Mono";
`;

const Header = styled.div`
  & h1 {
    font-size: 75px;
    font-weight: normal;
    letter-spacing: 2px;
  }
  & h4 {
    font-weight: normal;
    margin-top: -5%;
  }
`;

const Slogan = styled.div`
  margin-top: 6%;
  margin-bottom: 6%;
  & h4 {
    font-size: 10px;
    font-weight: normal;
    text-transform: uppercase;
    letter-spacing: 3px;
    opacity: 0.5;
  }
`;

const ImageContainer = styled.div``;

const ImageOne = styled.div`
  background-image: url(${image1});
  background-size: cover;
  height: 350px;
  width: 400px;
  margin-top: 30%;
  margin-right: 60px;
  margin-left: 60px;
`;

const ImageTwo = styled.div`
  background-image: url(${image2});
  background-size: cover;
  height: 350px;
  width: 400px;
  margin-top: 30%;
  margin-right: 60px;
  margin-left: 60px;
`;

export default class SectionTwo extends Component {
  render() {
    return (
      <React.Fragment>
        <SectionWrapper>
          <Header className="row center-xs">
            <div className="col-xs-10">
              <h1>Careers</h1>
              <h4>Lorem ipsum dolor sit amet</h4>
            </div>
          </Header>
          <ImageContainer className="row center-xs">
            <div className="row">
              <div className="col-xs-12 col-lg-6">
                <ImageOne></ImageOne>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-lg-6">
                <ImageTwo></ImageTwo>
              </div>
            </div>
          </ImageContainer>
          <Slogan className="row center-xs">
            <div className="col-xs-10">
              <h4>
                "Let us make a double harvest: one of agricultural success and
                one of ideological reform."
              </h4>
            </div>
          </Slogan>
        </SectionWrapper>
      </React.Fragment>
    );
  }
}
