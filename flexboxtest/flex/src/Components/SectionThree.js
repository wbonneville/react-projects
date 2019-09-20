import React, { Component } from "react";
import styled from "styled-components";

const SectionWrapper = styled.div`
  padding-top: 3.5%;
  padding-left: 7%;
  padding-right: 7%;
  background-color: white;
  margin-bottom: 6%;

  & .mainStyle {
    background-color: #eee;
    border: 0 none;
    color: #eee;
    height: 1px;
  }

  /* @media (max-width: 220px) {
    padding-bottom: 1700px;
  } */
`;

// font-family: 'Noto Sans', sans-serif;
// font-family: 'Roboto Slab', serif;
// font-family: 'Nanum Gothic', sans-serif;
// font-family: 'EB Garamond', serif;
// font-family: 'Amiri', serif;

const NewsPanel = styled.div`
  padding-top: 4%;
  padding-bottom: 3%;

  & p {
    font-size: 30px;
    text-align: left;
    font-weight: 100;

    @media (max-width: 820px) {
      text-align: center;
    }
  }

  & .date {
    text-transform: uppercase;
    font-size: 14px;
  }

  @media (max-width: 220px) {
    padding-top: 30%;
  }
`;

const BreenCast = styled.div`
  & h1 {
    font-weight: 800;
    font-size: 100px;
    letter-spacing: 3px;
  }

  & p {
    margin-top: -4%;
    font-weight: 100;
    font-size: 20px;
  }

  & .mainHr {
    padding-top: 2%;
    padding-bottom: 4%;
  }
`;

export default class SectionTwo extends Component {
  render() {
    return (
      <React.Fragment>
        <SectionWrapper>
          <BreenCast className="row center-xs">
            <div className="col-xs-10 col-lg-8">
              <h1>Newscast</h1>
              <p>
                Regular broadcast made by Dr. Wallace Breen, delivered to the
                populace of City 17 via private televisions and, more commonly,
                large video monitors mounted on walls in public places such as
                town squares and railway stations.
              </p>
              <div className="mainHr row center-xs">
                <div className="col-xs-10">
                  <hr className="mainStyle"></hr>
                </div>
              </div>
            </div>
          </BreenCast>
          <NewsPanel className="container">
            <div className="row center-xs">
              <div className="col-xs-11 col-md-10">
                <p className="">
                  "Dear Dr. Breen. Why has the Combine seen fit to suppress our
                  reproductive cycle? Sincerely, A Concerned Citizen."
                </p>
              </div>
              <div className="divdate col-xs-11 col-md-2">
                <p className="date">April 02, 2018</p>
              </div>
            </div>
          </NewsPanel>
          <div className="row center-xs">
            <div className="col-xs-12">
              <hr className="mainStyle"></hr>
            </div>
          </div>
          <NewsPanel className="container">
            <div className="row center-xs">
              <div className="col-xs-11 col-md-10">
                <p className="">
                  We now have direct confirmation of a disruptor in our midst,
                  one who has acquired an almost messianic reputation in the
                  minds of certain citizens. His figure is synonymous with the
                  darkest urges of instinct, ignorance and decay.
                </p>
              </div>
              <div className="col-xs-12 col-md-2">
                <p className="date">April 02, 2018</p>
              </div>
            </div>
          </NewsPanel>
          <div className="row center-xs">
            <div className="col-xs-12">
              <hr className="mainStyle"></hr>
            </div>
          </div>
          <NewsPanel className="container">
            <div className="row center-xs">
              <div className="col-xs-11 col-md-10">
                <p className="">
                  I have been asked to say a few words to the transhuman arm of
                  Sector Seventeen Overwatch, concerning recent successes in
                  containing members of the resistance Science Team.
                </p>
              </div>
              <div className="col-xs-12 col-md-2">
                <p className="date">April 02, 2018</p>
              </div>
            </div>
          </NewsPanel>
          <div className="row center-xs">
            <div className="col-xs-12">
              <hr className="mainStyle"></hr>
            </div>
          </div>
          <NewsPanel className="container">
            <div className="row center-xs">
              <div className="col-xs-12 col-md-10">
                <p className="">
                  In order to be true to our nature, and our destiny, we must
                  aspire to greater things. We have outgrown our cradle. It is
                  futile to cry for mother's milk, when our true sustenance
                  awaits us among the stars. And only the universal union that
                  small minds call 'The Combine' can carry us there.
                </p>
              </div>
              <div className="col-xs-12 col-md-2">
                <p className="date">April 02, 2018</p>
              </div>
            </div>
          </NewsPanel>
          <div className="row center-xs">
            <div className="col-xs-12">
              <hr className="mainStyle"></hr>
            </div>
          </div>
          <NewsPanel className="container">
            <div className="row center-xs">
              <div className="col-xs-12 col-md-10">
                <p className="">
                  Adrian Shephard returns thanks to the Vortigaunts, in a gambit
                  to use him to buy Gordon Freeman time to find Wallace Breen
                  and keep his Overwatch pursuers at bay.
                </p>
              </div>
              <div className="col-xs-12 col-md-2">
                <p className="date">April 02, 2018</p>
              </div>
            </div>
          </NewsPanel>
        </SectionWrapper>
      </React.Fragment>
    );
  }
}
