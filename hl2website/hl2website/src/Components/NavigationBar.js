import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import styled from "styled-components";
import { device } from "./Device";
// Navbar Style
const StyledWrap = styled(Navbar)`
  background: rgb(46, 58, 80);
  opacity: 0.99;
  font-family: "Roboto";
  min-height: 80px;
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
