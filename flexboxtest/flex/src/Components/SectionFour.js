import React, { Component } from "react";
import styled from "styled-components";

const SectionWrapper = styled.div`
  background-color: white;
  margin-top: -3%;
  font-family: "SF-Mono";

  & h1 {
    padding-top: 62px;
    padding-left: 40px;
    color: black;
    font-weight: normal;
    font-size: 75px;
    letter-spacing: 2px;

    & .spanOne,
    .spanTwo {
      color: black;
    }
  }

  & .parent {
    width: 100%;
    text-align: center;

    & .horizontal {
      width: 350px;
      display: inline-block;
      color: black;
    }
  }

  & h2 {
    font-size: 20px;
  }

  & hr {
  }
`;

const StyledHr = styled.hr`
  border-color: #fff;
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
// Using classes is easier, but.. \o/

export default class NewSection extends Component {
  render() {
    return (
      <SectionWrapper>
        <div className="row center-xs">
          <div className="col-xs-10 col-lg-6">
            <h1>Policies</h1>
          </div>
        </div>

        <StyledHr primary></StyledHr>
        <div className="row center-xs">
          <div className="col-xs-4">
            <h2>Immigration</h2>
            <StyledHr></StyledHr>
            <p>
              {" "}
              If you're attempting to leave, you must carefully read our policy,
              which can be found <span>here.</span>
            </p>
            <p>
              <strong>
                Passports &nbsp; <i class="fas fa-long-arrow-alt-right"></i>
              </strong>
            </p>
            <p>
              <strong>
                Visas &nbsp; <i class="fas fa-long-arrow-alt-right"></i>{" "}
              </strong>
            </p>
            <p>
              <strong>
                Travel Warnings &nbsp;{" "}
                <i class="fas fa-long-arrow-alt-right"></i>
              </strong>
            </p>
          </div>
          <div className="col-xs-4">
            <h2>Dr. Breen</h2>
            <StyledHr thirdary></StyledHr>
            <p>
              {" "}
              Dr. Wallace Breen is the current Earth Administrator under the
              Combine.
            </p>
            <p>
              <strong>
                Transcripts &nbsp; <i class="fas fa-long-arrow-alt-right"></i>
              </strong>
            </p>
            <p>
              <strong>
                Contact &nbsp; <i class="fas fa-long-arrow-alt-right"></i>
              </strong>
            </p>
            <p>
              <strong>
                Education and Culture at Citadel &nbsp;{" "}
                <i class="fas fa-long-arrow-alt-right"></i>
              </strong>
            </p>
          </div>

          <div className="row-xs-4">
            <h2>Working at State</h2>
            <StyledHr secondary></StyledHr>
            <p>
              The Combine's collective goal is to create the Universal Union.
            </p>
            <p>
              <strong>
                Job Openings &nbsp; <i class="fas fa-long-arrow-alt-right"></i>
              </strong>
            </p>
            <p>
              <strong>
                Other Opportunities &nbsp;{" "}
                <i class="fas fa-long-arrow-alt-right"></i>
              </strong>
            </p>
          </div>
        </div>
      </SectionWrapper>
    );
  }
}
