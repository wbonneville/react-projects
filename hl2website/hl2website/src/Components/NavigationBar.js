import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import styled from "styled-components";

// Navbar Style
const StyledWrap = styled(Navbar)`
  background: rgb(46, 58, 80);
  opacity: 0.99;
  font-family: "Roboto";
`;

const StyledBrand = styled(Navbar.Brand)`
  && {
    color: white;
    :hover {
      color: white;
    }
  }
`;

function NavigationBar() {
  return (
    <StyledWrap>
      <Navbar>
        <StyledBrand href="#home">City 17 Information Desk</StyledBrand>
        <Nav className="mr-auto">
          <Nav.Link href="#city17">Nova Prospekt</Nav.Link>
          <Nav.Link href="#features">Citadel</Nav.Link>
          <Nav.Link href="#pricing">City 17</Nav.Link>
        </Nav>
      </Navbar>
    </StyledWrap>
  );
}

export default NavigationBar;
