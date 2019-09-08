import React, { Component } from "react";
import styled from "styled-components";

const SectionWrapper = styled.div`
  height: 800px;
  width: 100%;
  font-family: "Futura";
  background-color: #f6f6f6;
`;

const Watch = styled.div`
  margin-top: 8%;

  & h1 {
    font-size: 70px;
    color: #17263a;
  }
  & h4 {
    color: #17263a;
  }
`;

const NewsPanel = styled.div`
  padding-top: 3%;
  padding-bottom: 3%;
  & a {
    color: black;
    text-decoration: none;
  }
`;

export default class SectionTwo extends Component {
  render() {
    return (
      <React.Fragment>
        <SectionWrapper>
          <NewsPanel class="container">
            <div class="row center-xs">
              <div class="col-xs-12 col-md-10">
                <h3 class="">
                  <a class="" href="#">
                    "Dear Dr. Breen. Why has the Combine seen fit to suppress
                    our reproductive cycle? Sincerely, A Concerned Citizen."
                  </a>
                </h3>
              </div>
              <div class="col-xs-12 col-md-2">
                <p class="">April 02, 2018</p>
              </div>
            </div>
            <div className="row center-xs">
              <div className="col-xs-11">
                <hr></hr>
              </div>
            </div>
          </NewsPanel>
        </SectionWrapper>
      </React.Fragment>
    );
  }
}
