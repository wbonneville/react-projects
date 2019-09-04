import React, { Component } from "react";
import image from "../images/teamwork.png";
import styled from "styled-components";

const Image = styled.div`
  background-image: url(${image});
  background-size: cover;
  margin-top: -16px;
  & .slide {
    height: 690px;
  }
`;

export default class Hero extends Component {
  render() {
    return (
      <Image>
        <div className="row xs-center">
          <div className="col-xs-12 ">
            <div className="slide"></div>
          </div>
        </div>
      </Image>
    );
  }
}
