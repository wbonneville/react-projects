import React, { Component } from "react";
import styled from "styled-components";
import soviet from "../images/art5.jpg";

// background-color: #f4f4f4ce;
const SlideWrapper = styled.div`
  width: 100%;
  text-align: center;
  margin-top: -150px;
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
