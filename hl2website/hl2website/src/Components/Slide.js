import React, { Component } from "react";
import styled from "styled-components";
import image from "../images/slide2.jpg";
import combine from "../images/combine.png";

const ImgWrap = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.1)),
    url(${image});
  background-size: contain;
  opacity: 0.9;
  & .row {
    width: 100%;
    height: 700px;

    & .divRow {
      font-size: 130px;
      color: white;
      padding-top: 40px;
      width: 100%;
      margin-left: 50px;
      text-align: center;
      & span {
      }
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
  }

  & .text-block {
    position: absolute;
    bottom: -400px;
    right: 500px;
    background-color: white;
    color: black;
    padding-left: 20px;
    padding-right: 20px;

    & h4 {
      font-size: 50px;
    }

    & p {
      font-size: 20px;
    }

    & a {
      font-size: 20px;
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
              <strong>
                <span>It's great </span> to be part of the greater good.
              </strong>
              <Block className="containerBlock">
                <div className="text-block">
                  <div
                    class="fullbar-item w-100 cursor-pointer"
                    onclick="location.href='#'"
                  >
                    <div class="container">
                      <div class="align-items-center border-top">
                        <div class="col-md-10">
                          <h3 class="feed-item-heading m-0 font-weight-800">
                            <a class="text-black" href="#">
                              Solodev Ranked as High Performer on G2 Crowd’s
                              Spring 2018 Web Content Management Grid
                            </a>
                          </h3>
                        </div>
                        <div class="col-md-10">
                          <p class="m-0 text-pink text-uppercase">
                            April 02, 2018
                          </p>
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
