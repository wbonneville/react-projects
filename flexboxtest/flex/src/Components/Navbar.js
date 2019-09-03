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

  & .special {
    font-size: 30px;
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

  @media all and (max-width: 300px) {
    flex-wrap: wrap;
    align-items: center;

    & li {
      flex-basis: 50%;
    }
  }

  @media all and (max-width: 640px) {
    align-items: center;
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
            <li className="special"> City 17 Information Desk </li>
            <li className="ml-md-auto">Civil Protection | Metropolice</li>
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
