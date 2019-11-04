import React from "react";
import {Navbar, Nav, Button} from "react-bootstrap";
import '../styles/NavBar.css';


function NavDropdownExample() {
  const handleSelect = eventKey => alert(`selected ${eventKey}`);

  return (

    <Navbar  className="Navbar fluid" collapseOnSelect expand="lg" >
          <Navbar.Brand href="#home">
      <img
        src="https://i.imgur.com/11Agt4k.png"
        width="60"
        height="60"
        className="d-inline-block align-top"
        alt="acbc logo"
      />
    </Navbar.Brand>
    <Navbar.Brand  className="NavbarBrand fluid" href="#home">After Coding Bootcamp</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end" >
  
      <Nav  className="Nav fluid">
      <Button  className="Button fluid" variant="success">Sign Up</Button>
        <Nav.Link  className="NavKeyLogin fluid"  eventKey={2} href="#login">
          Login
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  );
}


export default NavDropdownExample;