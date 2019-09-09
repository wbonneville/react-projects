import React, { Component } from "react";
import styled from "styled-components";
import image1 from "../images/job.png";
import image2 from "../images/education.png";

const SectionWrapper = styled.div`
  background-color: white;
  margin-top: -3%;
  font-family: "SF-Mono";
  margin-left: 5%;
  margin-right: 5%;
  margin-bottom: 10%;

  & h1 {
    color: black;
    font-weight: normal;
    font-size: 75px;
    letter-spacing: 2px;

    & .spanOne,
    .spanTwo {
      color: black;
    }
  }

  & h2 {
    font-size: 24px;
    font-weight: normal;
  }

  & h4 {
    font-weight: normal;
    opacity: 0.9;
    margin-top: -4%;
    margin-bottom: 5%;
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

  margin-bottom: ${props => (props.primary ? "5%" : "")};
`;

// Just having fun withs props ^ ^ ^
// Using classes is easier, but.. \o/

const ImageOne = styled.div`
  background-image: url(${image1});
  background-size: contain;
  height: 300px;
  width: 300px;
  margin-top: 8rem;
  margin-right: 8rem;
  margin-left: 8rem;
`;

const ImageTwo = styled.div`
  background-image: url(${image2});
  background-size: contain;
  height: 300px;
  width: 300px;
  margin-top: 8rem;
  margin-right: 8rem;
  margin-left: 8rem;
`;

export default class NewSection extends Component {
  render() {
    return (
      <SectionWrapper>
        <div className="row center-xs">
          <div className="col-xs-10">
            <h1>Policies</h1>
            <h4>
              Leading City 17's structural policies to advance the interests and
              security of all entities.
            </h4>
          </div>
        </div>

        <StyledHr primary></StyledHr>
        <div className="row center-xs">
          <div className="col-xs-10 col-lg-4">
            <h2>Immigration</h2>
            <StyledHr></StyledHr>
            <p>
              {" "}
              If you're attempting to leave, you must carefully read our policy,
              which can be found <span>here.</span>
            </p>
            <p>
              <strong>
                &nbsp; Passports &nbsp;{" "}
                <i class="fas fa-long-arrow-alt-right"></i>
              </strong>
            </p>
            <p>
              <strong>
                &nbsp; Visas &nbsp; <i class="fas fa-long-arrow-alt-right"></i>{" "}
              </strong>
            </p>
            <p>
              <strong>
                &nbsp; Travel Warnings &nbsp;{" "}
                <i class="fas fa-long-arrow-alt-right"></i>
              </strong>
            </p>
          </div>
          <div className="col-xs-10 col-lg-4">
            <h2>Dr. Breen</h2>
            <StyledHr thirdary></StyledHr>
            <p>
              {" "}
              Dr. Wallace Breen is the current Earth Administrator under the
              Combine.
            </p>
            <p>
              <strong>
                &nbsp; Transcripts &nbsp;{" "}
                <i class="fas fa-long-arrow-alt-right"></i>
              </strong>
            </p>
            <p>
              <strong>
                &nbsp; Contact &nbsp;{" "}
                <i class="fas fa-long-arrow-alt-right"></i>
              </strong>
            </p>
            <p>
              <strong>
                &nbsp; Education and Culture at Citadel &nbsp;{" "}
                <i class="fas fa-long-arrow-alt-right"></i>
              </strong>
            </p>
          </div>

          <div className="row-xs-10 col-lg-4">
            <h2>Working at State</h2>
            <StyledHr secondary></StyledHr>
            <p>
              The Combine's collective goal is to create the Universal Union.
            </p>
            <p>
              <strong>
                &nbsp; Job Openings &nbsp;{" "}
                <i class="fas fa-long-arrow-alt-right"></i>
              </strong>
            </p>
            <p>
              <strong>
                &nbsp; Other Opportunities &nbsp;{" "}
                <i class="fas fa-long-arrow-alt-right"></i>
              </strong>
            </p>
          </div>
        </div>
        <div className="row center-xs">
          <div className="row">
            <div className="col-xs-12 col-lg-1">
              <ImageOne></ImageOne>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-lg-1">
              <ImageTwo></ImageTwo>
            </div>
          </div>
        </div>
      </SectionWrapper>
    );
  }
}