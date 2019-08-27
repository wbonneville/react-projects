import React, { Component } from "react";
import styled from "styled-components";
import image from "../images/slide2.jpg";
import combine from "../images/combine.png";

const ImgWrap = styled.div`
  background-image: url(${image});
  background-size: contain;
  & .row {
    width: 100%;
    height: 700px;

    & h1 {
      font-size: 130px;
      color: white;
      padding-top: 85px;
      width: 100%;
      margin-left: 50px;
      text-align: left;

      & span {
      }
    }
  }
`;

const CombineWrap = styled.div`
  background-image: url(${combine});
  &&& .combineImg {
    width: 100%;
    height: 100px;
    z-index: 2;
    padding-bottom: 500px;
  }
`;

export default class Index extends Component {
  render() {
    return (
      <ImgWrap>
        <div className="container">
          <div className="row">
            <h1>
              <strong>
                <span>It's great </span> to be part of the greater good.
              </strong>
            </h1>
          </div>
          <CombineWrap>
            <div className="combineImg"></div>
          </CombineWrap>
        </div>
      </ImgWrap>
    );
  }
}
