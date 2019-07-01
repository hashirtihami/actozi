import React from "react";
// import logo from "./logo.svg";
import "../Home/Home.css";
import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Row, Col, Container } from "react-bootstrap";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";


function Registration() {
  return (
    <Container fluid>
      <Row>
        <Col lg={12} className="no-padding">
          <Header />
        </Col>
      </Row>

      {/* <Row>
        <Col lg={12} className="no-padding">
          <Footer />
        </Col>
      </Row> */}

    </Container>
  );
}

export default Registration;
