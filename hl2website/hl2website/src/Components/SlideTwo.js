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

  & .slogan {
    font-size: 100px;
    color: white;
    padding-top: 150px;
    width: 100%;
    margin-left: auto;
    text-align: center;
    text-transform: uppercase;
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
