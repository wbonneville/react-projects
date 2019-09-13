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

const Text = styled.div`
  background-color: black;
`;

const TextTwo = styled.div`
  background-color: white;
`;

const Header = styled.div`
  color: white;
  margin-top: 4%;
  & h1 {
    font-size: 60px;
    font-weight: 800;
    letter-spacing: 2px;
    padding: 2%;
  }
  & h4 {
    font-weight: 100;
    font-size: 20px;
    padding: 3%;
  }
`;

const HeaderTwo = styled.div`
  color: black;
  margin-top: 4%;
  & h1 {
    font-size: 60px;
    font-weight: 800;
    letter-spacing: 2px;
    padding: 2%;
  }
  & h4 {
    font-weight: 100;
    font-size: 20px;
    padding: 3%;
  }
`;

const HeaderThree = styled.div`
  color: white;
  margin-top: 4%;
  & h1 {
    font-size: 60px;
    font-weight: 800;
    letter-spacing: 2px;
    padding: 2%;
  }
  & h4 {
    font-weight: 100;
    font-size: 20px;
    padding: 3%;
  }
`;

export default class SectionTwo extends Component {
  render() {
    return (
      <React.Fragment>
        <SectionWrapper>
          <Header className="row">
            <Text className="col-xs-7">
              <h1>Lorem Ipsum</h1>
              <h4>Lorem ipsum dolor sit amet</h4>
            </Text>
          </Header>
          <HeaderTwo className="row">
            <TextTwo className="col-xs-7">
              <h1>Lorem Ipsum</h1>
              <h4>Lorem ipsum dolor sit amet</h4>
            </TextTwo>
          </HeaderTwo>

          {/* 
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
          </Slogan> */}
        </SectionWrapper>
      </React.Fragment>
    );
  }
}
