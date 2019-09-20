import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderWrapper = styled.header`
  background-color: black;
  align-items: center;
  text-align: center;
`;

const StyledUl = styled.ul`
  color: white;
  display: flex;
  list-style-type: none;

  align-items: center;

  /* font-family: 'Playfair Display', serif;
font-family: 'Heebo', sans-serif;
font-family: 'Saira Extra Condensed', sans-serif;
font-family: 'Questrial', sans-serif;
font-family: 'Maven Pro', sans-serif;
font-family: 'Cinzel', serif; */

  & h1 {
    font-size: 34px;
    margin-left: -5px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    font-weight: 900;
    font-family: "Heebo";

    & span {
    }
  }

  & li {
    font-size: 15px;
    margin-right: 0.2em;
    padding: 15px 5px;
    text-decoration: none;
  }

  & .mao {
    margin-left: 1%;
    font-size: 30px;
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
  background-color: #f6f6f6;
  margin-top: -0.4rem;
  margin-bottom: 1px;

  & li {
    margin-left: 0.5em;
    margin-right: 0.5em;
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.4px;
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
  &:active {
    color: green;
  }
`;

export default class Test extends Component {
  render() {
    return (
      <HeaderWrapper>
        <div className="row center-xs">
          <div className="col-xs-12">
            <StyledUl className="container">
              <h1 className="special">
                City <span className="span">17</span>
              </h1>
              <i className="fas fa-city mao "></i>
            </StyledUl>
          </div>
        </div>

        <StyledUlTwo>
          <li>
            <StyledLink to="/">
              Home &nbsp;<i className="fas fa-angle-down"></i>
            </StyledLink>
          </li>
          <li>
            <StyledLink to="/administration">
              Administration &nbsp;<i className="fas fa-angle-down"></i>
            </StyledLink>
          </li>
          <li>
            <StyledLink to="/jobs">
              {" "}
              Jobs and Positions &nbsp;<i className="fas fa-angle-down"></i>
            </StyledLink>
          </li>
          <li>
            <StyledLink to="/transportation">
              Transportation &nbsp;<i className="fas fa-angle-down"></i>
            </StyledLink>
          </li>
          <li>
            <StyledLink to="/rationingandcredits">
              On Rationing and Credits &nbsp;
              <i className="fas fa-angle-down"></i>
            </StyledLink>
          </li>
          <li>
            <StyledLink to="/housing">
              On Apartments and Housing &nbsp;
              <i className="fas fa-angle-down"></i>
            </StyledLink>
          </li>
          <li>
            <StyledLink to="/benefactors">
              On Benefactors &nbsp;<i className="fas fa-angle-down"></i>
            </StyledLink>
          </li>
          <li>
            <StyledLink to="/civilprotection">
              On Civil Protection &nbsp;<i className="fas fa-angle-down"></i>
            </StyledLink>
          </li>
        </StyledUlTwo>
      </HeaderWrapper>
    );
  }
}
