import React, { Component } from "react";
import styled from "styled-components";
import image1 from "../images/factory.jpeg";
import image2 from "../images/factory2.png";
// import image3 from "../images/qab.png";
// import image4 from "../images/splash.jpg";

const SectionWrapper = styled.div`
  background-color: white;
  margin-top: -3%;

  margin-bottom: 10%;

  & h1 {
    color: black;
    font-weight: 800;
    font-size: 85px;
    letter-spacing: 3px;

    & .spanOne,
    .spanTwo {
      color: black;
    }
  }

  & h2 {
    font-size: 24px;
    font-weight: 100;
  }

  & h4 {
    font-weight: 100;
    font-size: 25px;
    margin-top: -3%;
    margin-bottom: 4%;
  }

  & p {
    font-size: 15px;
  }

  & .goodP {
    font-weight: 500;
    padding-top: 3%;
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
  height: 350px;
  width: 350px;
  margin-top: 8rem;
  margin-right: 8rem;
  margin-left: 8rem;
`;

// const ImageThree = styled.div`
//   background-image: url(${image3});
//   background-size: cover;
//   height: 150px;
//   margin-top: 10%;
//   margin-bottom: 10%;
// `;

// const ImageFour = styled.div`
//   background-image: url(${image4});
//   background-size: cover;
//   height: 700px;
//   margin-top: 5%;
//   margin-bottom: 5%;
// `;

export default class NewSection extends Component {
  render() {
    return (
      <SectionWrapper>
        <div className="row center-xs">
          <div className="col-xs-11">{/* <ImageThree></ImageThree> */}</div>
        </div>

        <div className="row center-xs">
          <div className="col-xs-6">
            <h1>Policy</h1>
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
            <p className="goodP">
              &nbsp; Passports &nbsp;{" "}
              <i className="fas fa-long-arrow-alt-right"></i>
            </p>
            <p className="goodP">
              &nbsp; Visas &nbsp;{" "}
              <i className="fas fa-long-arrow-alt-right"></i>{" "}
            </p>
            <p className="goodP">
              &nbsp; Travel Warnings &nbsp;{" "}
              <i className="fas fa-long-arrow-alt-right"></i>
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
            <p className="goodP">
              &nbsp; Transcripts &nbsp;{" "}
              <i className="fas fa-long-arrow-alt-right"></i>
            </p>
            <p className="goodP">
              &nbsp; Contact &nbsp;{" "}
              <i className="fas fa-long-arrow-alt-right"></i>
            </p>
            <p className="goodP">
              &nbsp; Education and Culture at Citadel &nbsp;{" "}
              <i className="fas fa-long-arrow-alt-right"></i>
            </p>
          </div>

          <div className="row-xs-10 col-lg-4">
            <h2>Working at State</h2>
            <StyledHr secondary></StyledHr>
            <p>
              The Combine's collective goal is to create the Universal Union.
            </p>
            <p className="goodP">
              &nbsp; Job Openings &nbsp;{" "}
              <i className="fas fa-long-arrow-alt-right"></i>
            </p>
            <p className="goodP">
              &nbsp; Other Opportunities &nbsp;{" "}
              <i className="fas fa-long-arrow-alt-right"></i>
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
