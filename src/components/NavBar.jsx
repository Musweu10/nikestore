import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/logo/brand_logologo.png";

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary fixed-top">
      <Container>
        <Navbar.Brand href="#">
          {" "}
          <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-3 my-lg-0"
            style={{ maxHeight: "400px"  }}
            navbarScroll
          >
            <Nav.Link className="mx-auto" href="#action1">
              Menu
            </Nav.Link>
            <Nav.Link className="mx-auto" href="#action2">
              Location
            </Nav.Link>
            <Nav.Link className="mx-auto" href="#action3">
              About
            </Nav.Link>
            <Nav.Link className="mx-auto" href="#action4">
              Contact
            </Nav.Link>
          </Nav>
          <div className="text-center">
            {" "}
            <Button className="btn btn-danger px-5 my-2 rounded-0">Login</Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
