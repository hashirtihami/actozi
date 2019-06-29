import React from "react";
import dp from "./dp.png";
import logo from "../../logo.png";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Header.css";

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
            <Nav.Link href="/admin/home">Actozi Clothings</Nav.Link>
            <NavDropdown title="Products" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/admin/createproducts">
                Add Product
              </NavDropdown.Item>
              <NavDropdown.Item href="/admin/existingproducts">
                Existing Products
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/admin/orders">Orders</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse>
          <Nav className="ml-auto">
            <Nav.Link href="/home">Admin</Nav.Link>
            <Navbar.Brand href="/admin/home" className="mx-auto">
              <img
                src={dp}
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
