import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import styled from "styled-components";

function SecondaryNavigationBar() {
  return (
    <StyledWrap>
      <Navbar>
        <StyledBrand href="#home">City 17 Information Desk</StyledBrand>
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
