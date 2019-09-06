import React, { Component } from "react";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  background: black;
  align-items: center;
  text-align: center;
`;

const StyledUl = styled.ul`
  color: white;
  display: flex;
  list-style-type: none;
  opacity: 0.99;
  font-family: "Roboto";
  align-items: center;
  font-family: "Futura";

  & h4 {
    margin-right: 0.4em;
    align-items: center;
  }

  & li {
    font-size: 15px;
    margin-right: 0.2em;
    padding: 15px 5px;
  }

  & .special {
    font-size: 24px;
  }

  @media all and (max-width: 160px) {
    & li {
      font-size: 14px;
      flex: 1;
      text-align: center;
    }

    & .special {
      font-size: 19px;
    }
  }

  @media all and (max-width: 300px) {
    flex-wrap: wrap;
    & li {
      flex-basis: 40%;
    }
  }
  @media all and (max-width: 650px) {
    flex-wrap: wrap;
    & li {
      flex-basis: 40%;
    }
  }
`;

const StyledUlTwo = styled(StyledUl)`
  margin-top: -0.4rem;
  background: #f5f5f5;
  color: black;

  & li {
    margin-left: 0.5em;
    margin-right: 0.5em;
    font-size: 12px;
    opacity: 0.6;
  }

  @media all and (max-width: 300px) {
    flex-wrap: wrap;
    text-align: center;
    & li {
      flex-basis: 50%;
    }
  }

  @media all and (max-width: 650px) {
    flex-wrap: wrap;
    & li {
      flex-basis: 40%;
    }
  }
`;

export default class Test extends Component {
  render() {
    return (
      <HeaderWrapper>
        <div className="row center-xs">
          <div className="col-xs-6">
            <StyledUl className="container">
              <h4 className="special">
                <strong>City 17 Information Desk</strong>
              </h4>
              <h4>
                <strong>Civil Protection | Metropolice</strong>
              </h4>
            </StyledUl>
          </div>
        </div>
        <StyledUlTwo>
          <li> Testing option </li>
          <li> Testing option</li>
          <li> Testing option</li>
          <li> Testing option</li>
          <li> Longer Testing option</li>
          <li> Longer Testing option</li>
          <li> Longer Testing option</li>
        </StyledUlTwo>
      </HeaderWrapper>
    );
  }
}
