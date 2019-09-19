import React, { Component } from "react";
import styled from "styled-components";
import image1 from "../../images/half1.jpg";
import image2 from "../../images/testing4.jpg";

const Div = styled.div`
  font-size: 23px;
  margin-left: 7%;
  margin-right: 7%;
  margin-top: 4%;
  margin-bottom: 5%;

  & h4 {
    font-weight: 100;
    margin-top: -2%;
    width: 90%;
  }
`;

const TableWrapper = styled.div`
  padding-top: 10%;
  padding-bottom: 10%;
  & h2 {
    margin-top: 15%;
    font-size: 32px;
    font-weight: 100;
    text-transform: uppercase;
    color: black;
    margin-bottom: 15%;
  }

  & .icon {
    color: #ff6666;
  }

  & h4 {
    font-weight: 300;
    font-size: 18px;
  }

  &&& .topHr {
    margin-top: -2rem;
  }

  @media (min-width: 150px) and (max-width: 249px) {
    i {
    }
  }
`;

const DivTwo = styled.div`
  background-color: #ff6666;
  color: white;
  padding-bottom: 10%;
  padding-top: 10%;
  & h1 {
    font-size: 120px;
    text-shadow: 2px 2px 2px #000;
  }

  & h4 {
    font-weight: 100;
    font-size: 40px;
  }

  @media (min-width: 150px) and (max-width: 249px) {
    h1 {
      font-size: 30px;
    }

    h4 {
      font-size: 12px;
    }
  }

  @media (min-width: 250px) and (max-width: 380px) {
    h1 {
      font-size: 60px;
    }
    h4 {
      font-size: 18px;
    }
  }

  @media (min-width: 381px) and (max-width: 600px) {
    h1 {
      font-size: 90px;
    }
    h4 {
      font-size: 24px;
    }
  }
`;

const Speeches = styled.div`
  margin-left: 7%;
  margin-right: 7%;
  margin-top: 4%;
  margin-bottom: 5%;
  text-align: left;
  & h1 {
    font-size: 35px;
  }
  & h4 {
    font-weight: 100;
    margin-top: -2%;
    width: 90%;
  }
`;

const SectionTwo = styled.div`
  background-color: #f6f6f6;
  padding-top: 8%;

  & h1 {
    color: #ff6666;
    font-size: 75px;
    font-weight: 800;
  }

  & h4 {
    color: #ff6666;
    font-weight: 100;
    font-size: 32px;
    padding-bottom: 10%;
    margin-right: 10%;
    margin-left: 10%;
  }
  @media (min-width: 150px) and (max-width: 249px) {
    h1 {
      font-size: 20px;
    }

    h4 {
      font-size: 12px;
    }
  }

  @media (min-width: 250px) and (max-width: 380px) {
    h1 {
      font-size: 30px;
    }
    h4 {
      font-size: 18px;
    }
  }

  @media (min-width: 381px) and (max-width: 600px) {
    h1 {
      font-size: 40px;
    }
    h4 {
      font-size: 24px;
    }
  }
`;

const Image = styled.div`
  background-image: url(${image1});
  background-size: cover;
  height: 650px;
  margin-left: -0.5rem;
  margin-right: -0.5rem;

  & h1 {
    font-size: 150px;
    color: white;
    font-weight: 800;
  }
`;

const ImageTwo = styled.div`
  background-image: url(${image2});
  background-size: cover;
  height: 650px;
  margin-left: -0.5rem;
  margin-right: -0.5rem;
`;

export default class Housing extends Component {
  render() {
    return (
      <React.Fragment>
        <Div className="row start-xs">
          <div className=" col-xs-12">
            <h1>Administration</h1>
            <h4>September 16th, 2019</h4>
          </div>
        </Div>
        <DivTwo className="row center-xs">
          <div className="col-xs-12">
            <h1>Welcome.</h1>
            <div className="row center-xs">
              <div className="col-xs-8">
                <h4>
                  Welcome! Welcome to City 17. You have chosen, or have been
                  chosen, to relocate to one of our finest remaining urban
                  centers. I thought so much of City 17 that I elected to
                  establish my administration here, in the citadel so
                  thoughtfully provided by our benefactors. I've been proud to
                  call City 17 my home. And so, whether you are here to stay, or
                  passing through on your journey to parts unknown, welcome to
                  City 17. It's safer here.
                </h4>
              </div>
            </div>
          </div>
        </DivTwo>
        <TableWrapper className="row center-xs">
          <div className="col-xs-10 col-md-4">
            <h1>
              <i className="icon far fa-clone fa-6x"></i>
            </h1>
            <h2> Service </h2>
            <div className="row center-xs">
              <div className="col-xs-4">
                {" "}
                <hr className="topHr"></hr>
                <h4>Ipsum lorem </h4>
                <h4>Ipsum lorem </h4>
                <h4>Ipsum lorem </h4>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-md-4">
            <h1>
              <i className="icon fab fa-cloudversify fa-6x"></i>
            </h1>
            <h2>Regulation</h2>
            <div className="row center-xs">
              <div className="col-xs-4">
                {" "}
                <hr className="topHr"></hr>
                <h4>Ipsum lorem </h4>
                <h4>Ipsum lorem </h4>
                <h4>Ipsum lorem </h4>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-md-4">
            <h1>
              <i className=" icon fas fa-code-branch fa-6x"></i>
            </h1>
            <h2>Reductionism</h2>
            <div className="row center-xs">
              <div className="col-xs-4">
                {" "}
                <hr className="topHr"></hr>
                <h4>Ipsum lorem </h4>
                <h4>Ipsum lorem </h4>
                <h4>Ipsum lorem </h4>
              </div>
            </div>
          </div>
        </TableWrapper>
        <SectionTwo className="row center-xs">
          <div className="col-xs-10 col-md-12">
            <h1>
              Work without laying down conditions, without expecting reward.
            </h1>
            <h4>
              Let us make a double harvest, one of labor and one of ideological
              reform.
            </h4>
            <div className="row center-xs">
              <div className="col-xs-6">
                <Image className="row"></Image>
              </div>
              <div className="col-xs-6">
                <ImageTwo></ImageTwo>
              </div>
            </div>
          </div>
        </SectionTwo>
      </React.Fragment>
    );
  }
}
