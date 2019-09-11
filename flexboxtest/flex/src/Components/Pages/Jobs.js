import React, { Component } from "react";
import styled from "styled-components";

const JobsWrapper = styled.div`
  margin-left: 2em;
  margin-right: 2em;
  @media (max-width: 400px) {
    flex-direction: column;
  }
`;

const JobsHeader = styled.div`
  & h2 {
    font-size: 32px;
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
    font-weight: normal;
  }
`;

export default class Jobs extends Component {
  render() {
    return (
      <React.Fragment>
        <JobsWrapper className="row start-xs">
          <JobsHeader className="col-xs-12 col-sm-6">
            <h2>
              <strong>Jobs and Positions</strong>
            </h2>
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
        </JobsWrapper>
      </React.Fragment>
    );
  }
}
