import React, { Component } from "react";
import styled from "styled-components";

const CircleWrapper = styled.div`
  text-align: center;
  padding-bottom: 80px;
  width: 100%;
  font-family: "Roboto";

  & h2 {
    padding-top: 40px;
    font-size: 12px;
  }

  & .goldHr {
    width: 12%;
    margin-left: auto;
    margin-right: auto;
    border-color: #b96835;
`;

const Circle = styled.div`
  display: inline-block;
  padding-top: 70px;
  & i {
    margin-right: 60px;
  }
  & .fa-city {
    color: black;
  }
  & .fa-clinic-medical {
    color: black;
  }
  & .fa-address-card {
    color: black;
  }
  & .fa-charging-station {
    color: black;
  }
  & .fa-chalkboard-teacher {
    color: black;
  }
`;

export default class RecruitSlide extends Component {
  render() {
    return (
      <CircleWrapper>
        <hr className="recruitHr"></hr>
        <h1>Recruiting</h1>
        <hr className="goldHr"></hr>
        <h2>
          Success breeds complacency. Complacency breeds failure. Only the
          paranoid survive.
        </h2>
        <Circle className="dot">
          {" "}
          <i class="fas fa-city fa-5x"></i>
        </Circle>
        <Circle className="dot">
          {" "}
          <i class="fas fa-clinic-medical fa-5x"></i>
        </Circle>
        <Circle className="dot">
          {" "}
          <i class="far fa-address-card fa-5x"></i>
        </Circle>
        <Circle className="dot">
          {" "}
          <i class="fas fa-charging-station fa-5x"></i>
        </Circle>
        <Circle className="dot">
          {" "}
          <i class="fas fa-chalkboard-teacher fa-5x"></i>
        </Circle>
      </CircleWrapper>
    );
  }
}
