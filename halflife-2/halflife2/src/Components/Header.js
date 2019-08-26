import React, { Component } from "react";
import pic1 from "../images/pic1.jpg";
import styled from "styled-components";

const PicStyle = styled.img`
  max-width: 100%;
  height: auto;
  width: 100%;
  height: 650px;
  position: relative;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${pic1});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`;

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  min-height: 300px;
  padding: 0 0px;
`;

const HeaderStyle = styled.div`
  position: relative;
  padding: 20px;
`;

export default class Header extends Component {
  render() {
    return (
      <Wrapper>
        <div class="slide">
          <HeaderStyle>
            <PicStyle class="logo" />
            <div class="menu">
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Team</a>
                </li>
                <li>
                  <a href="#">Portfolio</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
          </HeaderStyle>
          <div class="slideTitle">
            <h1>Half-Life 2 </h1>
            <p>
              "...This is how it always starts. First a building, then the whole
              block."
            </p>
          </div>
        </div>
      </Wrapper>
    );
  }
}
