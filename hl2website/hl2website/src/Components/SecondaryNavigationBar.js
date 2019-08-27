import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
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
          <StyledLinks href="#city17">Jobs</StyledLinks>
          <StyledLinks href="#features">Apartments</StyledLinks>
          <StyledLinks href="#pricing">Rationing</StyledLinks>
          <StyledLinks href="#pricing">Administration</StyledLinks>
          <StyledLinks href="#pricing">Benefactors</StyledLinks>
          <StyledLinks href="#pricing">Civil Protection</StyledLinks>
          <StyledLinks href="#pricing">Immigration</StyledLinks>
          <StyledLinks href="#pricing">Immigration</StyledLinks>
        </Nav>
      </Navbar>
    </StyledWrap>
  );
}

export default SecondaryNavigationBar;
