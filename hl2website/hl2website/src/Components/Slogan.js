import React, { Component } from "react";
import styled from "styled-components";

const DivWrap = styled.div`
  &&& {
  }
`;

const SloganWrap = styled.h1`
  && {
    font-size: 40px;
    color: black;
    margin-top: 80px;
    margin-bottom: 80px;
    text-align: center;
  }
`;

export default class Slogan extends Component {
  render() {
    return (
      <DivWrap>
        <SloganWrap>
          <strong>
            And so, whether you are here to stay, or passing through on your way
            to parts unknown, welcome to City 17. It's safer here.
          </strong>
        </SloganWrap>
      </DivWrap>
    );
  }
}
