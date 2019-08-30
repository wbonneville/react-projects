import React, { Component } from "react";
import styled from "styled-components";
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
  width: 40%;
  height: 600px;
  font-family: "Roboto";
`;

const SlideTwo = styled.div`
  background-color: red;
  width: 60%;
  height: 600px;
  font-family: "Roboto";
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
