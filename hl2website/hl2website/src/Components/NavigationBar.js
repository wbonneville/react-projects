import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import styled from "styled-components";

// Navbar Style
const StyledWrap = styled(Navbar)`
  background: rgb(46, 58, 80);
  opacity: 0.99;
  font-family: "Roboto";
  min-height: 80px;
`;

const StyledBrand = styled(Navbar.Brand)`
  && {
    color: white;
    font-size: 22px;

    :hover {
      color: white;
    }
  }
`;

const StyledLink = styled(Nav.Link)`
  &&& {
    color: white;
    font-size: 12px;
  }
`;

const StyledNav = styled(Nav)`
  float: right;
`;

function NavigationBar() {
  return (
    <StyledWrap>
      <Navbar>
        <StyledBrand href="#home">
          <strong>City 17 Information Desk</strong>
        </StyledBrand>
        <StyledNav className="ml-md-auto">
          <StyledLink className="ml-md-auto" href="#city17">
            Civil Protection | Metropolice
          </StyledLink>
        </StyledNav>
      </Navbar>
    </StyledWrap>
  );
}

export default NavigationBar;
