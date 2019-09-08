import React, { Component } from "react";
import styled from "styled-components";

const SectionWrapper = styled.div`
  height: 800px;
  width: 100%;
  font-family: "EB Garamond";
  background-color: #f6f6f6;
`;

// font-family: 'Noto Sans', sans-serif;
// font-family: 'Roboto Slab', serif;
// font-family: 'Nanum Gothic', sans-serif;
// font-family: 'EB Garamond', serif;
// font-family: 'Amiri', serif;

const NewsPanel = styled.div`
  padding-top: 3%;
  padding-bottom: 3%;

  & p {
    font-size: 20px;
  }

  & a {
    text-decoration: none;
    color: inherit;
  }
`;

export default class SectionTwo extends Component {
  render() {
    return (
      <React.Fragment>
        <SectionWrapper>
          <NewsPanel className="container">
            <div className="row center-xs">
              <div className="col-xs-12 col-md-10">
                <p className="">
                  <a className="" href="#">
                    "Dear Dr. Breen. Why has the Combine seen fit to suppress
                    our reproductive cycle? Sincerely, A Concerned Citizen."
                  </a>
                </p>
              </div>
              <div className="col-xs-12 col-md-2">
                <p className="">April 02, 2018</p>
              </div>
            </div>
          </NewsPanel>
          <div className="row center-xs">
            <div className="col-xs-11">
              <hr></hr>
            </div>
          </div>
        </SectionWrapper>
      </React.Fragment>
    );
  }
}
