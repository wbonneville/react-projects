import React, { Component } from "react";
import styled from "styled-components";
import image from "../images/slide.jpg";

const ImgWrap = styled.div`
  background-image: url(${image}) no-repeat center center;
  & .row {
    width: auto;
    height: 800px;
  }
`;

export default class Index extends Component {
  render() {
    return (
      <ImgWrap>
        <div className="row"></div>
      </ImgWrap>
    );
  }
}
