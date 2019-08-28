import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import styled from "styled-components";

const StyledWrap = styled(Navbar)`
  background: #f5f5f5;
  opacity: 0.99;
  max-height: 40px;
  font-size: 12px;
  font-family: "Roboto";
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
