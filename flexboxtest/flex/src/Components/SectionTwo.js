import React, { Component } from "react";
import styled from "styled-components";

import image1 from "../images/factory.jpeg";
import image2 from "../images/factory2.png";

const SectionWrapper = styled.div`
  font-family: "SF-Mono";
  padding-left: 8%;
  padding-right: 8%;

  & hr {
    background-color: #eee;
    border: 0 none;
    color: #eee;
    height: 1px;
  }
`;

const Header = styled.div`
  color: white;

  & h1 {
    font-size: 60px;
    font-weight: 600;
    letter-spacing: 2px;
    padding: 2%;
  }
  & h4 {
    font-weight: normal;

    padding: 3%;
  }
`;

const Text = styled.div`
  background-color: black;
`;

const Slogan = styled.div`
  margin-top: 6%;
  margin-bottom: 6%;
  & h4 {
    font-size: 10px;
    font-weight: normal;
    text-transform: uppercase;
    letter-spacing: 3px;
    opacity: 0.5;
  }
`;

// const ImageContainer = styled.div``;

// const ImageOne = styled.div`
//   background-image: url(${image1});
//   background-size: cover;
//   height: 350px;
//   width: 400px;
//   margin-top: 30%;

//   box-shadow: 7px 7px 5px grey;
// `;

// const ImageTwo = styled.div`
//   background-image: url(${image2});
//   background-size: cover;
//   height: 350px;
//   width: 400px;

//   box-shadow: 7px 7px 5px grey;
// `;

export default class SectionTwo extends Component {
  render() {
    return (
      <React.Fragment>
        <SectionWrapper>
          <Header className="row">
            <Text className="col-xs-7">
              <h1>Get Hired</h1>
              <h4>Lorem ipsum dolor sit amet</h4>
            </Text>
          </Header>

          <Slogan className="row center-xs">
            <div className="col-xs-10">
              <h4>
                "Let us make a double harvest: one of industrial success and one
                of ideological reform."
              </h4>
              <div className="row center-xs">
                <div className="col-xs-8">
                  <hr></hr>
                </div>
              </div>
            </div>
          </Slogan>
        </SectionWrapper>
      </React.Fragment>
    );
  }
}
