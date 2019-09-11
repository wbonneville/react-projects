import React, { Component } from "react";
import styled from "styled-components";

const JobsHeader = styled.div`
  font-size: 24px;
`;

const JobsInfo = styled.div`
  font-size: 17px;
  text-align: left;
`;

export default class Jobs extends Component {
  render() {
    return (
      <div className="row center-xs">
        <JobsHeader className="col-xs-12 col-lg-6">
          <strong>Jobs and Positions</strong>
        </JobsHeader>
        <JobsInfo className="col-xs-12 col-lg-6">
          What is AI? It's the quest to build machines that can reason, learn,
          and act intelligently, and it has barely begun. We cover the latest
          advances in machine learning, neural networks, and robots.
        </JobsInfo>
      </div>
    );
  }
}
