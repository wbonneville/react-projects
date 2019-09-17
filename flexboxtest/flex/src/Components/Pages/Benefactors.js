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
  }
`;

export default class Housing extends Component {
  render() {
    return (
      <Div className="row start-xs">
        <div className="col-xs-10">
          <h1>Benefactors</h1>
          <h4>September 16th, 2019</h4>
          <p></p>
        </div>
      </Div>
    );
  }
}
