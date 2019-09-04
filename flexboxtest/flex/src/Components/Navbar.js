import React, { Component } from "react";
import styled from "styled-components";

const StyledNav = styled.div`
  font-family: "Futura";
`;

const StyledUl = styled.ul`
  color: white;
  display: flex;
  list-style-type: none;
  background: rgb(46, 58, 80);
  opacity: 0.99;
  font-family: "Roboto";
  align-items: center;
  font-family: "Futura";

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
  margin-top: -1rem;
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
    text-align:center & li {
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

export default class Navbar extends Component {
  render() {
    return (
      <React.Fragment>
        <StyledNav>
          <StyledUl className="container">
            <li className="special">
              <strong>City 17 Information Desk</strong>
            </li>
            <li>
              <strong>Civil Protection | Metropolice</strong>
            </li>
          </StyledUl>
          <StyledUlTwo className="container">
            <li> Testing option </li>
            <li> Testing option</li>
            <li> Testing option</li>
            <li> Testing option</li>
            <li> Longer Testing option</li>
            <li> Longer Testing option</li>
            <li> Longer Testing option</li>
          </StyledUlTwo>
        </StyledNav>
      </React.Fragment>
    );
  }
}
