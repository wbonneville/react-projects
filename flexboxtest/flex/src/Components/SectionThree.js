import React, { Component } from "react";
import styled from "styled-components";

const SectionWrapper = styled.div`
  height: 1500px;
  width: 100%;
  font-family: "Amiri";
  background-color: #f6f6f6;

  & .mainStyle {
    border: 0;
    height: 1px;
    background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.75),
      rgba(0, 0, 0, 0)
    );
  }
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
    font-size: 23px;
    text-align: left;

    @media (max-width: 820px) {
      text-align: center;
    }
  }

  & a {
    text-decoration: none;
    color: inherit;
  }

  & .date {
    text-transform: uppercase;
    font-size: 14px;
  }
`;

export default class SectionTwo extends Component {
  render() {
    return (
      <React.Fragment>
        <SectionWrapper>
          <NewsPanel className="container">
            <div className="row center-xs">
              <div className="col-xs-12 col-md-10">
                <p className="">
                  <a className="" href="#">
                    "Dear Dr. Breen. Why has the Combine seen fit to suppress
                    our reproductive cycle? Sincerely, A Concerned Citizen."
                  </a>
                </p>
              </div>
              <div className="col-xs-12 col-md-1">
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
                  <a className="" href="#">
                    We now have direct confirmation of a disruptor in our midst,
                    one who has acquired an almost messianic reputation in the
                    minds of certain citizens. His figure is synonymous with the
                    darkest urges of instinct, ignorance and decay.
                  </a>
                </p>
              </div>
              <div className="col-xs-12 col-md-1">
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
                  <a className="" href="#">
                    I have been asked to say a few words to the transhuman arm
                    of Sector Seventeen Overwatch, concerning recent successes
                    in containing members of the resistance Science Team.
                  </a>
                </p>
              </div>
              <div className="col-xs-12 col-md-1">
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
                  <a className="" href="#">
                    In order to be true to our nature, and our destiny, we must
                    aspire to greater things. We have outgrown our cradle. It is
                    futile to cry for mother's milk, when our true sustenance
                    awaits us among the stars. And only the universal union that
                    small minds call 'The Combine' can carry us there.
                  </a>
                </p>
              </div>
              <div className="col-xs-12 col-md-1">
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
                  <a className="" href="#">
                    Adrian Shephard returns thanks to the Vortigaunts, in a
                    gambit to use him to buy Gordon Freeman time to find Wallace
                    Breen and keep his Overwatch pursuers at bay.
                  </a>
                </p>
              </div>
              <div className="col-xs-12 col-md-1">
                <p className="date">April 02, 2018</p>
              </div>
            </div>
          </NewsPanel>
          <div className="row center-xs">
            <div className="col-xs-12">
              <hr className="mainStyle"></hr>
            </div>
          </div>
        </SectionWrapper>
      </React.Fragment>
    );
  }
}
