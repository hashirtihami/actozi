import React from "react";
// import logo from "./logo.svg";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Row, Col, Container } from "react-bootstrap";

import Header from "../../components/Header/Header";
import Carousel from "../../components/Carousel/Carousel";
import Footer from "../../components/Footer/Footer";
import Tile from "../../components/Tile/Tile";
import Product from "../../components/Product/Product";

function Home() {
  return (
    <Container fluid>
      <Header />
      <Row>
        <Col lg={12} className="no-padding">
          <Carousel />
        </Col>
      </Row>
      <Row className="margin-top">
        <Col lg={4} sm={4} xs={4}>
          <Tile />
        </Col>
        <Col lg={4} sm={4} xs={4}>
          <Tile />
        </Col>
        <Col lg={4} sm={4} xs={4}>
          <Tile />
        </Col>
      </Row>
      <Row className="grid">
        <Col md lg>
          <Product />
        </Col>
        <Col md lg>
          <Product />
        </Col>
        <Col md lg>
          <Product />
        </Col>
        <Col md lg>
          <Product />
        </Col>
      </Row>
      <Row>
        <Col lg={12} className="no-padding">
          <Footer />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
