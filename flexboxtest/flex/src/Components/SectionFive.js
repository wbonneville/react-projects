import React, { Component } from "react";
import styled from "styled-components";
import image1 from "../images/slide2.jpg";

const Image = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)),
    url(${image1});
  background-size: cover;
  height: 710px;
  width: 100%;
`;

export default class SectionFive extends Component {
  render() {
    return <Image></Image>;
  }
}
