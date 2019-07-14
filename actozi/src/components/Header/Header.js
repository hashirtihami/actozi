import React from "react";
import logo from "../../logo.png";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import classnames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";

import "./Header.css";

export default class Header extends React.Component {
  state = {
    prevScrollpos: window.pageYOffset,
    isVisible: false
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  // Remove the event listener when the component is unmount.
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const isVisible = currentScrollPos > 0;

    console.log(isVisible);
    this.setState({
      prevScrollpos: currentScrollPos,
      isVisible
    });
  };

  render() {
    return (
      <Navbar
        bg="light"
        expand="lg"
        fixed="top"
        className={classnames(
          { "navbar-transparent": !this.state.isVisible },
          "bold",
          {
            "navbar-solid": this.state.isVisible
          }
        )}
      >
        <Navbar.Brand href="/home" className="nav-link-white">
          <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
          <span
            style={{
              marginLeft: 10
            }}
          >
            Actozi Clothings
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="ml-auto">
            <Nav.Link className="nav-link-white" href="/cart">
              <FontAwesomeIcon icon={faShoppingCart} />
            </Nav.Link>
            {/* <Nav.Link className="nav-link-white" href="/registration">
              <FontAwesomeIcon icon={faUser} />
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
