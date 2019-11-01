import React from "react";
import {Navbar, Nav, Button} from "react-bootstrap";
import '../styles/NavBar.css';


function NavDropdownExample() {
  const handleSelect = eventKey => alert(`selected ${eventKey}`);

  return (

    <Navbar fluid className="Navbar" collapseOnSelect expand="lg" >
    <Navbar.Brand fluid className="NavbarBrand" href="#home">After Coding Bootcamp</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end" >
  
      <Nav fluid className="Nav">
      <Button fluid className="Button" variant="success">Sign Up</Button>
        <Nav.Link eventKey={2} href="#login">
          Login
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  );
}


export default NavDropdownExample;