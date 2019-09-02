import React, { Component } from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import image from "../images/testimg.jpg";
import styled from "styled-components";

// Mobile S - 320px
// Mobile M - 375px
// Mobile L - 425px
// Tablet - 768px
// Laptop - 1024px
// Laptop L - 1440px
// 4K - 2560px

const Container = styled.div`
  position: relative;
  text-align: center;
  color: black;

  & .text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media (max-width: 320px) {
    .text {
      font-size: 20px;
    }
  }
  @media (min-width: 451px) and (max-width: 540px) {
    .text {
      font-size: 70px;
    }
  }
  @media (min-width: 541px) and (max-width: 800px) {
    .text {
      font-size: 100px;
    }
  }
  @media (min-width: 801px) and (max-width: 900px) {
    .text {
      font-size: 150px;
    }
  }
  @media (min-width: 901px) and (max-width: 1440px) {
    .text {
      font-size: 200px;
    }
  }
`;

const ContainerTwo = styled.div`
  height: 845px;
  background-color: red;
`;

const TestImage = styled.img`
  height: 845px;
`;

export default class Section extends Component {
  render() {
    return (
      <React.Fragment>
        <Container>
          <div className="text">Text!</div>
          <TestImage src={image}></TestImage>
        </Container>
        <ContainerTwo></ContainerTwo>
      </React.Fragment>
    );
  }
}
