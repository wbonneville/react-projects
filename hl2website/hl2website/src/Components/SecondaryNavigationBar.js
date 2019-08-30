import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import styled from "styled-components";
import { device } from "./Device";

const StyledWrap = styled(Navbar)`
  background: #f5f5f5;
  opacity: 0.99;
  max-height: 40px;
  font-size: 12px;
  font-family: "Roboto";
  @media ${device.mobileS} {
    max-width: 320px;
  }

  @media ${device.mobileM} {
    max-width: 375px;
  }

  @media ${device.mobileL} {
    max-width: 425px;
  }

  @media ${device.tablet} {
    max-width: 768px;
  }

  @media ${device.laptop} {
    max-width: 1440px;
  }

  @media ${device.desktop} {
    max-width: 1400px;
  }
`;

const StyledLinks = styled(Nav.Link)`
  margin-left: 0.5em;
  margin-right: 0.5em;
  &&&:hover {
    color: black;
  }
`;

function SecondaryNavigationBar() {
  return (
    <StyledWrap>
      <Navbar>
        <Nav className="mr-auto">
          <StyledLinks href="#city17">Citadel</StyledLinks>
          <StyledLinks href="#city17">Jobs and Positions</StyledLinks>
          <StyledLinks href="#features">Apartments and Housing</StyledLinks>
          <StyledLinks href="#pricing">Rationing and Credits</StyledLinks>
          <StyledLinks href="#pricing">Administration</StyledLinks>
          <StyledLinks href="#pricing">Benefactors</StyledLinks>
          <StyledLinks href="#pricing">Civil Protection</StyledLinks>
          <StyledLinks href="#pricing">Transportation</StyledLinks>
          <StyledLinks href="#pricing">Report Suspicious Activity</StyledLinks>
        </Nav>
      </Navbar>
    </StyledWrap>
  );
}

export default SecondaryNavigationBar;
