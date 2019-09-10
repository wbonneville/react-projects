import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderWrapper = styled.header`
  background: black;
  align-items: center;
  text-align: center;
`;

const StyledUl = styled.ul`
  color: white;
  display: flex;
  list-style-type: none;

  font-family: "SF-Mono";
  align-items: center;

  & h1 {
    font-size: 25px;
    font-weight: 2000;
    margin-left: -5px;
  }

  & li {
    font-size: 15px;
    margin-right: 0.2em;
    padding: 15px 5px;
    text-decoration: none;
    color: black;
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

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  &:hover {
    color: grey;
  }
`;

export default class Test extends Component {
  render() {
    return (
      <HeaderWrapper>
        <div className="row center-xs">
          <div className="col-xs-12">
            <StyledUl className="container">
              <h1 className="special">City 17 Head Office</h1>
            </StyledUl>
          </div>
        </div>

        <StyledUlTwo>
          <li>
            <StyledLink to="/">Home</StyledLink>
          </li>
          <li>
            <StyledLink to="/jobs"> Jobs and Positions</StyledLink>
          </li>
          <li>
            {" "}
            <StyledLink to="/apartments">Apartments and Housing</StyledLink>
          </li>
          <li>
            {" "}
            <StyledLink to="/rationingandcredits">
              Rationing and Credits
            </StyledLink>
          </li>
          <li>
            {" "}
            <StyledLink to="/administration">Administration</StyledLink>
          </li>
          <li>
            {" "}
            <StyledLink to="/benefactors">Benefactors</StyledLink>
          </li>
          <li>
            {" "}
            <StyledLink to="/civilprotection">Civil Protection</StyledLink>
          </li>
          <li>
            {" "}
            <StyledLink to="/transportation">Transportation</StyledLink>
          </li>
        </StyledUlTwo>
      </HeaderWrapper>
    );
  }
}
