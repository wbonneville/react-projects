import React, { Component } from "react";
import styled from "styled-components";
import teamwork from "../images/teamwork.png";

const ImgWrap = styled.div`
  background-image: url(${teamwork});
  background-size: contain;
  background-repeat: no-repeat;
  opacity: 0.9;

  &&& .row {
    height: 900px;
    text-align: center;
    margin: auto;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
`;

export default class SlideTwo extends Component {
  render() {
    return (
      <ImgWrap>
        <div className="row"></div>
      </ImgWrap>
    );
  }
}
