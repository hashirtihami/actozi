import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";

import "./Footer.css";

export default class Footer extends React.Component {
  render() {
    return (
      <Navbar bg="dark" expand="lg" variant="dark" sticky="bottom">
        <Nav className="footer-nav">
          <Navbar.Text>© 2019 Actozi Clothing</Navbar.Text>
          <Nav.Link href="#home">About</Nav.Link>
          <Nav.Link href="#link">Privacy Policy</Nav.Link>
          <Nav.Link href="#home">Terms Of Use</Nav.Link>
        </Nav>
        <Nav className="ml-auto">
          <Nav.Link href="#home">
            <FontAwesomeIcon icon={faFacebookF} />
          </Nav.Link>
          <Nav.Link href="#home">
            <FontAwesomeIcon icon={faInstagram} />
          </Nav.Link>
        </Nav>
      </Navbar>
    );
  }
}
