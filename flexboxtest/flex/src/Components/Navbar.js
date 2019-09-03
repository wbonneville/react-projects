import React, { Component } from "react";
import styled from "styled-components";

const StyledNav = styled.div`
  overflow: hidden;
`;

const StyledUl = styled.ul`
  color: white;
  display: flex;
  list-style-type: none;
  background: gray;
  opacity: 0.99;
  font-family: "Roboto";

  & li {
    font-size: 20px;
    padding: 15px 5px;
  }

  @media all and (max-width: 300px) {
    flex-wrap: wrap;
    & li {
      flex-basis: 40%;
    }
  }
`;

const StyledUlTwo = styled(StyledUl)`
  margin-top: -1rem;
  background: blue;

  & li {
    margin-left: 0.5em;
    margin-right: 0.5em;
  }

  @media all and (max-width: 600px) {
    flex-wrap: wrap;
    align-items: center;

    & li {
      flex-basis: 50%;
    }
  }
`;

export default class Navbar extends Component {
  render() {
    return (
      <React.Fragment>
        <StyledNav>
          <StyledUl className="container">
            <li> Home </li>
            <li> About</li>
            <li> Good</li>
            <li> Logout</li>
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
