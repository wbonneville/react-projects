import React, { Component } from "react";
import styled from "styled-components";
import image1 from "../../images/factory.jpeg";

// Section One Styles

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

// Section Two Styles

const JobsSectionTwo = styled.div`
  margin-left: 2em;
  margin-right: 2em;
`;

const ImageOne = styled.div`
  background-image: url(${image1});
  background-size: cover;
  height: 350px;
  width: 600px;
`;

const Featured = styled.div`
  color: purple;
`;

const FeaturedJob = styled.div`
  & h1 {
    font-size: 40px;
  }

  & h4 {
    font-size: 18px;
    font-weight: 100;
  }
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
          <Featured className="row start-xs">
            <div className="col-xs-12">Featured</div>
          </Featured>

          <FeaturedJob className="row start-xs">
            <div className="col-xs-4 col-lg-6">
              <h1>
                Facebook is making its own AI deepfakes to head off a
                disinformation disaster
              </h1>
              <h4>
                The CTO of Facebook says videos forged using AI will be used
                maliciously on its platforms before long.
              </h4>
            </div>

            <div className="col-xs-12 col-lg-6">
              <ImageOne></ImageOne>
            </div>
          </FeaturedJob>
        </JobsSectionTwo>
      </React.Fragment>
    );
  }
}
