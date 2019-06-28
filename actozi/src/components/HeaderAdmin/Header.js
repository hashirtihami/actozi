import React from "react";
import logo from "../../logo.svg";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown"
export default class Header extends React.Component {
  render() {
    return (
      <Navbar bg="dark" expand="lg" variant="dark" sticky="top">
        <Navbar.Brand href="#home" className="mx-auto">
          <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav>
            <NavDropdown title="Products" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Add Product</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Existing Products</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">Orders</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse>
          <Nav className="ml-auto">
            <Nav.Link href="#home">Admin</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
