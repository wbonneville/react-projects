import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import styled from "styled-components";
import { device } from "./Device";

// Official Navbar Style
const StyledWrap = styled(Navbar)`
  background: gray;
  opacity: 0.99;
  font-family: "Roboto";
  max-height: 6px;
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
