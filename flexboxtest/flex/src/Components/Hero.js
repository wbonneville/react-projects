import React, { Component } from "react";
import styled from "styled-components";
import image from "../images/wallhaven.jpg";
import image2 from "../images/yellowcity.jpg";

const HeroWrapper = styled.div`
  margin-left: 7%;
  margin-right: 7%;
  margin-top: 4%;
`;

const HeroRow = styled.div``;

const Left = styled.div`
  background-color: black;
  color: white;
  padding: 0 0;

  & h1 {
    font-size: 45px;
    text-align: left;
    font-weight: 800;
    padding: 2%;
  }

  & h4 {
    text-align: left;
    font-size: 20px;
    font-weight: 300;
    padding: 2%;
    margin-top: -2rem;
  }
`;

const Right = styled.div`
  & h1 {
    font-size: 35px;
    font-weight: 800;
  }

  & h4 {
    font-size: 18px;
    text-align: left;
  }
`;

const Image = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.1)),
    url(${image});
  background-size: cover;
  height: 479px;
`;

const ImageTwo = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.1)),
    url(${image2});
  background-size: cover;
  height: 350px;
  margin-left: 4%;
`;

const PanelWrapper = styled.div`
  margin: 4%;
`;

const Panel = styled.div`
  background-color: black;
  color: white;
  margin-left: 4%;

  padding-bottom: 2%;
  & h1 {
    font-size: 45px;
    padding-top: 3%;
  }
  & h2 {
    margin-top: -10px;
    font-size: 18px;
    font-weight: 100;
    text-align: left;
    padding: 20px;
  }
`;

const Text = styled.div`
  background-color: black;
`;

const Header = styled.div`
  color: white;
  margin: 4%;
  & h1 {
    font-size: 60px;
    font-weight: 800;
    letter-spacing: 2px;
  }
  & h4 {
    font-weight: 200;
    font-size: 20px;
  }
`;

const SectionFour = styled.div`
  margin-top: 6%;
  margin-bottom: 6%;
  background: black;
  padding: 50px;
  margin-left: -0.7%;
`;

const Slogan = styled.div`
  & h1 {
    color: white;
    font-weight: 100;
    font-size: 60px;
    margin-left: 4.5rem;
  }

  & h2 {
    color: white;
    font-weight: 100;
    font-size: 35px;
    padding: 10px;

    & span {
      font-weight: 400;
    }
  }

  & .box {
    border: 1px solid white;
  }
`;

const Slides = styled.div`
  margin-right: 0.4px;
`;

const OneCol = styled.div`
  height: 800px;
  color: white;
  background-color: black;
  background-image: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.1)),
    url(${image});
`;
const TwoCol = styled.div`
  height: 800px;
  color: white;
  background-color: #f6f6f6;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1)),
    url(${image2});
`;

const Box = styled.div`
  color: white;
  background-color: black;
  margin-left: 4%;
  padding-bottom: 1%;
  padding-top: 1%;
  margin-bottom: 6%;
`;

export default class Hero extends Component {
  render() {
    return (
      <HeroWrapper>
        <HeroRow className="row center-xs">
          <Left className="col-xs-12 col-md-7">
            <h1>
              MIT’s “disqualified” donors aren’t necessarily banned from
              donating, says Media Lab whistleblower
            </h1>
            <h4>
              Dr. Kleiner, who leaked details about the lab’s relationship with
              Black Mesa, explains how its funding works.
            </h4>
            <Image></Image>
          </Left>
          <Right className=" col-xs-12 col-md-5">
            <Box>
              <h1>Reviews</h1>
            </Box>

            <ImageTwo></ImageTwo>
            <Panel className="col-xs-12">
              <h1>Lorem Ipsum</h1>
              <h2>
                so much lorem ipsum, so much lorem ipsum, so much lorem ipsum,
                so much lorem ipsum, so much lorem ipsum, so much lorem ipsum,
                wow, so much lorem ipsum, so much lorem ipsumso much lorem
                ipsumso much lorem ipsum, so much lorem ipsumso much lorem
                ipsumso much lorem ipsumso much lorem ipsumso much lorem ipsumso
                much lorem ipsum{" "}
              </h2>
            </Panel>
          </Right>
        </HeroRow>
        <SectionFour>
          <Slogan className="row center-xs">
            <div className="box col-xs-12 col-sm-4 ">
              <h2>
                What matters in <span>Technological Advancements</span> right
                now?
              </h2>
            </div>
            <div className=" col-xs-12 col-sm-8">
              <h1>We always want to know what you're thinking.</h1>
            </div>
          </Slogan>
        </SectionFour>
        <Slides className="row center-xs">
          <OneCol className="col-xs-6">
            <h1>One</h1>
          </OneCol>
          <TwoCol className="col-xs-6">
            <h1>Two</h1>
          </TwoCol>
        </Slides>
      </HeroWrapper>
    );
  }
}
