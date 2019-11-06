import React from "react";
import {Navbar, Nav, Button} from "react-bootstrap";
import Login from "./Login/login.js";
import Signup from "./SignUp/"
import '../styles/NavBar.css';


class NavDropdownExample extends React.Component {
  state={
    showLogin:false,
    showSignup:false

  }
  showLogin = ()=>{
    this.setState({
      showLogin:true
    })
  }
  hideLogin= ()=>{
    this.setState({
      showLogin : false
    })
  }
  showSignup = ()=>{
    this.setState({
      showSignup:true
    })
  }
  hideSignup= ()=>{
    this.setState({
      showSignup : false
    })
  }
   handleSelect = eventKey => alert(`selected ${eventKey}`);

  render(){
    return (

    <Navbar  className="Navbar fluid" collapseOnSelect expand="lg" >
          <Navbar.Brand href="/">
            <a href="/">
      <img
        src="https://i.imgur.com/11Agt4k.png"
        width="60"
        height="60"
        className="d-inline-block align-top"
        alt="acbc logo"
      /></a>
    </Navbar.Brand>
    <Navbar.Brand  className="NavbarBrand fluid" href="#home">After Coding Bootcamp</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end" >
      <Nav  className="Nav fluid">
      <span onClick={this.showSignup}>
      <Button  className="Button fluid" variant="success">Sign Up</Button>
      </span>
      <span onClick={this.showLogin}>
        <Nav.Link  className="NavKeyLogin fluid"  eventKey={2} href="#login">
          Login
        </Nav.Link></span>
      </Nav>
    </Navbar.Collapse>
    {this.state.showLogin?<Login clickHandler={this.hideLogin}/>:null}
    {this.state.showSignup?<Signup clickHandler={this.hideSignup}/>:null}
  </Navbar>

  
  );
}
}


export default NavDropdownExample;