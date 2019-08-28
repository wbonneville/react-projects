import React, { Component } from "react";
import styled from "styled-components";
import teamwork from "../images/teamwork.png";

const ImgWrap = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.1)),
    url(${teamwork});
  background-size: contain;
  background-repeat: no-repeat;

  &&& .row {
    height: 900px;
    text-align: center;
    margin: auto;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  & .slogan {
    font-size: 100px;
    color: white;
    width: 100%;
    text-transform: uppercase;
    vertical-align: middle;
    padding-top: 220px;
  }
`;

export default class SlideTwo extends Component {
  render() {
    return (
      <ImgWrap>
        <div className="row">
          <div className="slogan">
            <strong>Teamwork Builds Towers</strong>
          </div>
        </div>
      </ImgWrap>
    );
  }
}
