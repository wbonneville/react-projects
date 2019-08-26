import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import styled from "styled-components";

const StyledWrap = styled(Navbar)`
  background: white;
  opacity: 0.99;
  max-height: 40px;
`;

const StyledLinks = styled(Nav)`
  text-align: center;
`;

function SecondaryNavigationBar() {
  return (
    <StyledWrap>
      <Navbar>
        <StyledLinks className="mr-auto">
          <Nav.Link href="#city17">Test</Nav.Link>
          <Nav.Link href="#features">Test</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </StyledLinks>
      </Navbar>
    </StyledWrap>
  );
}

export default SecondaryNavigationBar;
