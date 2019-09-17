import React, { Component } from "react";
import styled from "styled-components";

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
`;

const DivTwo = styled.div`
  background-color: #ff6666;
  color: white;
  padding-bottom: 10%;
  padding-top: 10%;
  & h1 {
    font-size: 120px;
  }

  & h4 {
    font-weight: 100;
    font-size: 40px;
  }
`;

const Speeches = styled.div``;

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
                  {" "}
                  <h4>
                    Welcome! Welcome to City 17. You have chosen, or have been
                    chosen, to relocate to one of our finest remaining urban
                    centers. I thought so much of City 17 that I elected to
                    establish my administration here, in the citadel so
                    thoughtfully provided by our benefactors. I've been proud to
                    call City 17 my home. And so, whether you are here to stay,
                    or passing through on your journey to parts unknown, welcome
                    to City 17. It's safer here.
                  </h4>
                </h4>
              </div>
            </div>
          </div>
        </DivTwo>
        <TableWrapper className="row center-xs">
          <div className="col-xs-4">
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
          <div className="col-xs-4">
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
          <div className="col-xs-4">
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
        <div className="row center-xs">
          <div className="col-xs-12">
            <h1>Administrative Transcripts</h1>
          </div>
        </div>
        <Speeches className="row center-xs">
          <div className="col-xs-6">
            <h1>Speech #1</h1>
            <p>
              Let me read a letter I recently received. "Dear Dr. Breen. Why has
              the Combine seen fit to suppress our reproductive cycle?
              Sincerely, A Concerned Citizen." Thank you for writing, Concerned.
              Of course, your question touches on one of the most basic
              biological impulses, with all its associated hopes and fears for
              the future of the species. I also detect some unspoken questions.
              Do our benefactors really know what's best for us? What gives them
              the right to make this kind of decision for mankind? Will they
              ever deactivate the suppression field and let us breed again?
              Allow me to address the anxieties underlying your concerns, rather
              than try to answer every possible question you might have left
              unvoiced. First, let us consider the fact that for the first time
              ever, as a species, immortality is in our reach. This simple fact
              has far-reaching implications. It requires radical rethinking and
              revision of our genetic imperatives. It also requires planning and
              forethought that run in direct opposition to our neural pre-sets.
              I find it helpful at times like these to remind myself that our
              true enemy is Instinct. Instinct was our mother when we were an
              infant species. Instinct coddled us and kept us safe in those
              hardscrabble years when we hardened our sticks and cooked our
              first meals above a meager fire and started at the shadows that
              leapt upon the cavern's walls. But inseparable from Instinct is
              its dark twin, Superstition. Instinct is inextricably bound to
              unreasoning impulses, and today we clearly see its true nature.
              Instinct has just become aware of its irrelevance, and like a
              cornered beast, it will not go down without a bloody fight.
              Instinct would inflict a fatal injury on our species. Instinct
              creates its own oppressors, and bids us rise up against them.
              Instinct tells us that the unknown is a threat, rather than an
              opportunity. Instinct slyly and covertly compels us away from
              change and progress. Instinct, therefore, must be expunged. It
              must be fought tooth and nail, beginning with the basest of human
              urges: The urge to reproduce. We should thank our benefactors for
              giving us respite from this overpowering force. They have thrown a
              switch and exorcised our demons in a single stroke. They have
              given us the strength we never could have summoned to overcome
              this compulsion. They have given us purpose. They have turned our
              eyes toward the stars. Let me assure you that the suppressing
              field will be shut off on the day that we have mastered
              ourselves...the day we can prove we no longer need it. And that
              day of transformation, I have it on good authority, is close at
              hand.
            </p>
          </div>
        </Speeches>
      </React.Fragment>
    );
  }
}
