import React, { Component } from "react";
import styled from "styled-components";
import image from "../images/wallhaven.jpg";

const HeroWrapper = styled.div`
  padding-left: 8%;
  padding-right: 8%;
  padding-top: 4%;
  background-color: #f6f6f6;
`;

const HeroRow = styled.div``;

const Left = styled.div`
  background-color: black;
  color: white;
  padding: 0 0;
  & h1 {
    font-size: 45px;
    text-align: left;
    font-weight: 800;
    padding: 2%;
  }

  & h4 {
    text-align: left;
    font-size: 20px;
    font-weight: 300;
    padding: 2%;
  }
`;

const Right = styled.div`
  & h1 {
    font-size: 45px;
    font-weight: 800;
  }

  & h4 {
    font-size: 18px;
    text-align: left;
  }
`;

const Image = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.1)),
    url(${image});
  background-size: cover;
  height: 350px;
`;

const ImageTwo = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.1)),
    url(${image});
  background-size: cover;
  height: 350px;
  margin-top: 2%;
`;

const Panel = styled.div`
  background-color: black;
  color: white;
  margin-top: -5%;
  & h1 {
    font-size: 45px;
  }
`;
export default class Hero extends Component {
  render() {
    return (
      <HeroWrapper>
        <HeroRow className="row center-xs">
          <Left className="col-xs-7">
            <h1>
              MIT’s “disqualified” donors aren’t necessarily banned from
              donating, says Media Lab whistleblower
            </h1>
            <h4>
              Signe Swenson, who leaked details about the lab’s relationship
              with Jeffrey Epstein, explains how its funding works.
            </h4>
            <Image></Image>
          </Left>
          <Right className="col-xs-5">
            <h1>Content</h1>
            <ImageTwo></ImageTwo>
            <h4></h4>
            <Panel className="col-xs-12">
              <h1>Lorem Ipsum</h1>
            </Panel>
          </Right>
        </HeroRow>
      </HeroWrapper>
    );
  }
}
