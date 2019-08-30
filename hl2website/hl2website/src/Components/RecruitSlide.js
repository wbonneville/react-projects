import React, { Component } from "react";
import styled from "styled-components";
import { device } from "./Device";

const CircleWrapper = styled.div`
  text-align: center;
  padding-bottom: 80px;
  width: 100%;
  font-family: "Roboto";

  & h1 {
    font-size: 14px;
  }

  & h2 {
    padding-top: 40px;
    font-size: 14px;
    text-transform: uppercase;
    text-align: center;
  }

  & .goldHr {
    width: 3%;
    margin-left: auto;
    margin-right: auto;
    border-color: #b96835;
  }

  & .recruitHr {
    padding-top: 30px;
  }
`;

const Circle = styled.div`
  padding-top: 30px;

  & .dot {
    margin: 0 auto;
    width: 100px;
  }
  & i {
    text-align: center;
    margin-left: 10px;
    margin-right: 10px;
  }
  & .fa-city {
    color: #b96835;
  }
  & .fa-clinic-medical {
    color: #b96835;
  }
  & .fa-address-card {
    color: #b96835;
  }
  & .fa-charging-station {
    color: #b96835;
  }
  & .fa-chalkboard-teacher {
    color: #b96835;
  }
`;

export default class RecruitSlide extends Component {
  render() {
    return (
      <CircleWrapper>
        <hr className="recruitHr"></hr>

        <h2>Join us now for great benefits:</h2>
        <Circle className="dot">
          <i class="fas fa-city fa-1x"></i>
          <i class="fas fa-clinic-medical fa-1x"></i>
          <i class="far fa-address-card fa-1x"></i>
          <i class="fas fa-charging-station fa-1x"></i>
          <i class="fas fa-chalkboard-teacher fa-1x"></i>
        </Circle>
      </CircleWrapper>
    );
  }
}
