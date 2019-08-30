import React, { Component } from "react";
import styled from "styled-components";
import soviet from "../images/soviet5.jpg";

// background-color: #f4f4f4ce;
const SlideWrapper = styled.div`
  width: 100%;
  text-align: center;

  & .slide {
    display: inline-block;
  }
`;

const SlideOne = styled.div`
  background-color: pink;
  width: 70%;
  height: 600px;
  font-family: "Roboto";
`;

const SlideTwo = styled.div`
  background-color: red;
  width: 30%;
  height: 600px;
  font-family: "Roboto";
  background-image: url(${soviet});
  background-size: contain;
  opacity: 0.9;
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
