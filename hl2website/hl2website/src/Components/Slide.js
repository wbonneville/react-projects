import React, { Component } from "react";
import styled from "styled-components";
import slide from "../images/slide.jpg";

const ImgWrap = styled.div`
  background: url(${slide}) no-repeat center center;
  & .row {
    width: 100%;
    height: 800px;
  }
`;

export default class Slide extends Component {
  render() {
    return (
      <ImgWrap className="row">
        <div className="row"></div>
      </ImgWrap>
    );
  }
}
