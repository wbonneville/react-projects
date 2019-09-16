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
  & h2 {
    margin-top: 15%;
    font-size: 32px;
    font-weight: 100;
    text-transform: uppercase;
    color: darkgray;
    margin-bottom: 15%;
  }

  & .icon {
    color: #ff6666;
  }
`;

const DivTwo = styled.div`
  background-color: #ff6666;
  color: white;
  padding-bottom: 10%;
  & h1 {
    font-size: 100px;
  }

  & h4 {
    font-weight: 100;
    font-size: 40px;
  }
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
        <TableWrapper className="row center-xs">
          <div className="col-xs-4">
            <h1>
              <i className="icon far fa-clone fa-6x"></i>
            </h1>
            <h2> Dr. Breen </h2>
          </div>
          <div className="col-xs-4">
            <h1>
              <i className="icon fab fa-cloudversify fa-6x"></i>
            </h1>
            <h2>Combine</h2>
          </div>
          <div className="col-xs-4">
            <h1>
              <i className=" icon fas fa-code-branch fa-6x"></i>
            </h1>
            <h2>Citadel</h2>
          </div>
        </TableWrapper>
        <DivTwo className="row center-xs middle-xs">
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
      </React.Fragment>
    );
  }
}
