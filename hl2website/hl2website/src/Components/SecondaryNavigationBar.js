import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import styled from "styled-components";

const StyledWrap = styled(Navbar)`
  background: white;
  opacity: 0.99;
  max-height: 40px;
`;

const StyledBrand = styled(Navbar.Brand)`
  && {
    color: white;
    :hover {
      color: white;
    }
  }
`;

function SecondaryNavigationBar() {
  return (
    <StyledWrap>
      <Navbar>
        <Nav className="mr-auto">
          <Nav.Link href="#city17">City 17</Nav.Link>
          <Nav.Link href="#features">Apartments and Jobs</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Navbar>
    </StyledWrap>
  );
}

export default SecondaryNavigationBar;
