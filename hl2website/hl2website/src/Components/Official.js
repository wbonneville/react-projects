import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import styled from "styled-components";

// Official Navbar Style
const StyledWrap = styled(Navbar)`
  background: gray;
  opacity: 0.99;
  font-family: "Roboto";
  max-height: 6px;
`;

const StyledBrand = styled(Navbar.Brand)`
  && {
    color: white;
    font-size: 6px;
    :hover {
      color: white;
    }
  }
`;

function NavigationBar() {
  return (
    <StyledWrap>
      <Navbar>
        <StyledBrand href="#home">
          <strong>
            <i class="fas fa-globe-americas fa-xs"></i> Official Government Site
          </strong>
        </StyledBrand>
      </Navbar>
    </StyledWrap>
  );
}

export default NavigationBar;
