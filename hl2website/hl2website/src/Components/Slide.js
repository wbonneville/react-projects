import React, { Component } from "react";
import styled from "styled-components";
import image from "../images/slide2.jpg";

const ImgWrap = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.1)),
    url(${image});
  background-size: contain;
  opacity: 0.9;

  & .row {
    width: 100%;
    height: 700px;

    & .divRow {
      font-size: 100px;
      color: white;
      padding-top: 150px;
      width: 100%;
      margin-left: 50px;
      text-align: center;
    }
    & .goldHr {
      width: 16%;
      margin-left: auto;
      margin-right: auto;
      border-color: #b96835;
    }
  }

  @media (min-width: 451px) and (max-width: 540px) {
    .strong {
      font-size: 45px;
    }
  }
  @media (min-width: 541px) and (max-width: 800px) {
    .strong {
      font-size: 60px;
    }
  }
  @media (min-width: 801px) and (max-width: 900px) {
    .strong {
      font-size: 75px;
    }
  }
  @media (min-width: 901px) and (max-width: 1440px) {
    .strong {
      font-size: 100px;
    }
  }
`;

// const CombineWrap = styled.div`
//   background-image: url(${combine});
//   background-size: 50% auto;
//   &&& .combineImg {
//     width: 100%;
//     height: 50px;
//     z-index: 2;
//     padding-bottom: 500px;
//   }
// `;

const Block = styled.div`
  & .containerBlock {
    position: relative;
    text-align: center;
  }

  & .text-block {
    position: absolute;
    bottom: -270px;
    right: 600px;
    width: 700px;
    text-align: center;
    background-color: white;
    color: black;
    padding-left: 20px;
    padding-right: 20px;

    & h4 {
      font-size: 50px;
    }

    & p {
      font-size: 14px;
      font-family: "Roboto";
    }

    & a {
      font-size: 18px;
      font-family: "Roboto";
      color: black;
    }
  }

  @media (max-width: 320px) {
    .containerWith {
      bottom: -200px;
      right: 10px;
      width: 300px;
    }
  }
  @media (min-width: 451px) and (max-width: 540px) {
    .containerWith {
      bottom: -300px;
      right: 50px;
      width: 300px;
    }
  }
`;

export default class Index extends Component {
  render() {
    return (
      <ImgWrap>
        <div className="container">
          <div className="row">
            <div className="divRow">
              <strong className="strong">
                It's great to be part of the greater good.
              </strong>
              <Block className="containerBlock">
                <div className="text-block">
                  <div
                    class="fullbar-item w-100 cursor-pointer"
                    onclick="location.href='#'"
                  >
                    <div class="container">
                      <div className="containerWith">
                        <div class="col-md-10">
                          <h3 class="feed-item-heading m-0 font-weight-800">
                            <br></br>
                            <a class="text-black anchor" href="#">
                              Know what your situation is, hasten your
                              reformation, study with diligence, work with
                              enthusiasm, reform yourself from the inside out,
                              your future will indeed be bright.
                            </a>
                          </h3>
                        </div>
                        <div class="col-md-10">
                          <p class="m-4 text-pink text-uppercase">
                            August 28th, 2019
                          </p>
                          <hr className="goldHr"></hr>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Block>
            </div>
          </div>
        </div>
      </ImgWrap>
    );
  }
}
