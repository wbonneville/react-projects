import React, { Component } from "react";
import styled from "styled-components";
import soviet from "../images/art5.jpg";
import { device } from "./Device";

// background-color: #f4f4f4ce;
const SlideWrapper = styled.div`
  width: 100%;
  text-align: center;
  margin-top: -150px;
  @media ${device.mobileS} {
    max-width: 320px;
  }

  @media ${device.mobileM} {
    max-width: 375px;
  }

  @media ${device.mobileL} {
    max-width: 425px;
  }

  @media ${device.tablet} {
    max-width: 768px;
  }

  @media ${device.laptop} {
    max-width: 1440px;
  }

  @media ${device.desktop} {
    max-width: 1400px;
  }
  & .slide {
    display: inline-block;
  }
`;

const SlideOne = styled.div`
  width: 40%;
  height: 600px;
  font-family: "Roboto";
`;

const SlideTwo = styled.div`
  width: 60%;
  height: 600px;
  font-family: "Roboto";
  @media ${device.mobileS} {
    max-width: 320px;
  }

  @media ${device.mobileM} {
    max-width: 375px;
  }

  @media ${device.mobileL} {
    max-width: 425px;
  }

  @media ${device.tablet} {
    max-width: 768px;
  }

  @media ${device.laptop} {
    max-width: 1440px;
  }

  @media ${device.desktop} {
    max-width: 1400px;
  }

  background-size: contain;
  margin-bottom: -6px;
`;

export default class SlideThree extends Component {
  render() {
    return (
      <SlideWrapper>
        <SlideOne className="slide"></SlideOne>
        <SlideTwo className="slide"></SlideTwo>
      </SlideWrapper>
    );
  }
}
