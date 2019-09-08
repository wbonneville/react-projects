import React, { Component } from "react";
import styled from "styled-components";

const SectionWrapper = styled.div`
  height: 800px;
  width: 100%;
  font-family: "Futura";
  background-color: #ee9079;
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

export default class SectionTwo extends Component {
  render() {
    return (
      <React.Fragment>
        <SectionWrapper>
          <div className="row center-xs"></div>
          <div class="container">
            <div class="row">
              <div class="col-md-10">
                <h3 class="feed-item-heading m-0 font-weight-800">
                  <a class="text-black" href="#">
                    "Dear Dr. Breen. Why has the Combine seen fit to suppress
                    our reproductive cycle? Sincerely, A Concerned Citizen."
                  </a>
                </h3>
              </div>
              <div class="col-md-2">
                <p class="m-0 text-pink text-uppercase">April 02, 2018</p>
              </div>
            </div>
          </div>
          <div className="row center-xs"></div>
        </SectionWrapper>
      </React.Fragment>
    );
  }
}
