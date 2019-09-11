import React, { Component } from "react";
import styled from "styled-components";
import image1 from "../../images/factory.jpeg";

// Job Section One

const JobsSectionOne = styled.div`
  margin-left: 2em;
  margin-right: 2em;
  @media (max-width: 400px) {
    flex-direction: column;
  }
`;

const JobsHeader = styled.div`
  & h2 {
    font-size: 32px;
    font-weight: 700;
  }

  @media (max-width: 800px) {
    margin-bottom: -30px;
    flex-direction: column;
  }
`;

const JobsInfo = styled.div`
  & h3 {
    margin-top: 1.9em;
    font-size: 17px;
    text-align: left;
    font-weight: 100;
    color: #595858;
  }
`;

// Job Section Two

const JobsSectionTwo = styled.div`
  margin-left: 2em;
  margin-right: 2em;
`;

const ImageOne = styled.div`
  background-image: url(${image1});
  background-size: cover;
  height: 300px;
  width: 350px;
`;
export default class Jobs extends Component {
  render() {
    return (
      <React.Fragment>
        <JobsSectionOne className="row start-xs">
          <JobsHeader className="col-xs-12 col-sm-6">
            <h2>Jobs and Positions</h2>
          </JobsHeader>
          <JobsInfo className="col-xs-12 col-sm-6">
            <h3>
              What is AI? It's the quest to build machines that can reason,
              learn, and act intelligently, and it has barely begun. We cover
              the latest advances in machine learning, neural networks, and
              robots.
            </h3>
          </JobsInfo>
          <div className="col-xs-12">
            <hr></hr>
          </div>
        </JobsSectionOne>
        <JobsSectionTwo>
          <div className="row start-xs">
            <div className="col-xs-12">Featured</div>
          </div>

          <div className="row start-xs">
            <div className="col-xs-12">
              Facebook is making its own AI deepfakes to head off a
              disinformation disaster
            </div>
            <div className="col-xs-6 col-lg-6">
              The CTO of Facebook says videos forged using AI will be used
              maliciously on its platforms before long.
            </div>
            <div className="col-xs-12 col-lg-6">
              <ImageOne></ImageOne>
            </div>
          </div>
        </JobsSectionTwo>
      </React.Fragment>
    );
  }
}
