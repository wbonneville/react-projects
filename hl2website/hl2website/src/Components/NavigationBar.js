import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

function NavigationBar() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Half-Life 2 Information Desk</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">City 17</Nav.Link>
          <Nav.Link href="#features">Apartments and Jobs</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavigationBar;
