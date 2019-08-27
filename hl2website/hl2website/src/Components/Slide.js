import React, { Component } from "react";
import styled from "styled-components";
import image from "../images/slide2.jpg";

const ImgWrap = styled.div`
  background-image: url(${image});
  background-size: contain;
  & .row {
    width: 100%;
    height: 600px;
  }
`;

export default class Index extends Component {
  render() {
    return (
      <ImgWrap>
        <div className="container">
          <div className="row"></div>
        </div>
      </ImgWrap>
    );
  }
}
