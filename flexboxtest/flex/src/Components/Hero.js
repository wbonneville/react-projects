import React, { Component } from "react";
import image from "../images/teamwork.png";
import styled from "styled-components";

const HeroWrapper = styled.div`
  font-family: "Futura";
`;

const Image = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.1)),
    url(${image});
  background-size: cover;
  margin-top: -16px;
  & .slide {
    height: 690px;
  }
`;

const Welcome = styled.h1`
  color: white;
  font-size: 75px;
`;

const Slogan = styled.h2`
  color: white;
  font-size: 25px;
`;

export default class Hero extends Component {
  render() {
    return (
      <HeroWrapper>
        <Image>
          <div className="row">
            <div className="col-xs-12">
              <div className="row center-xs slide">
                <div className="col-xs-12">
                  <Welcome>Welcome.</Welcome>
                  <Slogan>It's great to part of the greater good.</Slogan>
                </div>
              </div>
            </div>
          </div>
        </Image>
      </HeroWrapper>
    );
  }
}
