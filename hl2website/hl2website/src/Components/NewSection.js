import React, { Component } from "react";
import styled from "styled-components";

const SectionWrapper = styled.div`
  background-color: #313d52;
  width: 100%;
  height: 600px;
  font-family: "Roboto";

  & h1 {
    padding-top: 62px;
    padding-left: 40px;
    color: white;
    font-size: 40px;

    & .spanOne,
    .spanTwo {
      color: #b96835;
    }
  }

  & .parent {
    width: 100%;
    text-align: center;

    & .horizontal {
      width: 350px;
      display: inline-block;
      color: white;
    }
  }

  & h2 {
    font-size: 20px;
  }

  & hr {
  }
`;

const StyledHr = styled.hr`
  border-color: #b96835;
  width: ${props =>
    props.primary
      ? "100%"
      : "21%" && props.secondary
      ? "30%"
      : "21%" && props.thirdary
      ? "15%"
      : "21%"};
`;

// Just having fun withs props ^ ^ ^

export default class NewSection extends Component {
  render() {
    return (
      <SectionWrapper>
        <h1>
          Leading City 17's structural policies to advance the{" "}
          <span className="spanOne">interests</span> and
          <span className="spanTwo"> security</span> of all entities.
        </h1>
        <br></br>
        <StyledHr primary></StyledHr>
        <br></br>
        <div className="parent">
          <div className="horizontal">
            <h2>Immigration</h2>
            <StyledHr></StyledHr>
            <p>
              {" "}
              If you're attempting to leave, you must carefully read our policy,
              which can be found <span>here.</span>
            </p>
            <p>
              <strong>Passports</strong>
            </p>
            <p>
              <strong>Visas</strong>
            </p>
            <p>
              <strong>Travel Warnings</strong>
            </p>
          </div>
          <div className="horizontal">
            <h2>Dr. Breen</h2>
            <StyledHr thirdary></StyledHr>
            <p>
              {" "}
              Dr. Wallace Breen is the current Earth Administrator under the
              Combine.
            </p>
            <p>
              <strong>Transcripts</strong>
            </p>
            <p>
              <strong>Contact</strong>
            </p>
            <p>
              <strong>Education and Culture at Citadel</strong>
            </p>
          </div>
          <div className="horizontal">
            <h2>Working at State</h2>
            <StyledHr secondary></StyledHr>
            <p>
              {" "}
              The Combine's collective goal is to create the Universal Union.
            </p>
            <p>
              <strong>Job Openings</strong>
            </p>
            <p>
              <strong>Other Opportunities</strong>
            </p>
            <p>&nbsp;</p>
          </div>
        </div>
      </SectionWrapper>
    );
  }
}
