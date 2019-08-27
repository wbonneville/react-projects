import React, { Component } from "react";
import styled from "styled-components";
import image from "../images/slide2.jpg";

const ImgWrap = styled.div`
  background-image: url(${image});
  background-size: contain;
  & .row {
    width: 100%;
    height: 700px;

    & h1 {
      font-size: 115px;
      color: white;
      padding-top: 50px;
      width: 60%;
      margin-left: 50px;
    }
  }
`;

export default class Index extends Component {
  render() {
    return (
      <ImgWrap>
        <div className="container">
          <div className="row">
            <h1>
              <strong>It's great to be part of the greater good.</strong>
            </h1>
          </div>
        </div>
      </ImgWrap>
    );
  }
}
