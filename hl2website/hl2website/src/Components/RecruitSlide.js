import React, { Component } from "react";
import styled from "styled-components";

const Circle = styled.div`
  height: 85px;
  width: 85px;
  background-color: #fff;
  border-radius: 50%;
  display: table-cell;
  vertical-align: middle;
  text-align: center;
`;

export default class RecruitSlide extends Component {
  render() {
    return (
      <div>
        <h1>Join us</h1>
        <Circle className="dot">
          {" "}
          <i class="fas fa-city fa-3x"></i>
        </Circle>
        <Circle className="dot">
          {" "}
          <i class="fas fa-clinic-medical fa-3x"></i>
        </Circle>
        <Circle className="dot">
          {" "}
          <i class="far fa-address-card fa-3x"></i>
        </Circle>
        <Circle className="dot">
          {" "}
          <i class="fas fa-charging-station fa-3x"></i>
        </Circle>
        <Circle className="dot">
          {" "}
          <i class="fas fa-chalkboard-teacher fa-3x"></i>
        </Circle>
      </div>
    );
  }
}
