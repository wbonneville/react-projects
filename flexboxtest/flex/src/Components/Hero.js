import React, { Component } from "react";
import image from "../images/img.jpg";
import styled from "styled-components";

const Image = styled.div`
  background-image: url(${image});
  background-size: contain;

  & .bike {
    width: 400px;
    height: 600px;
  }
`;

export default class Hero extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-12">
            <Image className="bike"></Image>
          </div>
        </div>
      </div>
    );
  }
}
