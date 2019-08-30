import React, { Component } from "react";
import styled from "styled-components";
import teamwork from "../images/teamwork.png";

const ImgWrap = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.9)),
    url(${teamwork});
  background-size: contain;



  &&& .row {
    height: 690px;
    text-align: center;
    margin: auto;
    display: block;
    margin-left: auto;
    margin-right: auto;
    overflow: hidden;
  
  }

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
