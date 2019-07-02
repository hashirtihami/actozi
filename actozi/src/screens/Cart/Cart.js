import React from "react";
// import logo from "./logo.svg";
import "../Home/Home.css";
import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Row, Col, Container } from "react-bootstrap";

import Header from "../../components/Header/Header";
import CartTable from "../../components/CartTable/CartTable";
import CheckoutBox from "../../components/CheckoutBox/CheckoutBox";
import Footer from "../../components/Footer/Footer";

function Cart() {
  return (
    <Container fluid >
      <Row>
        <Col lg={12} className="no-padding">
          <Header />
        </Col>
      </Row>
      <Row className="full-height">
        <Col className="cartTable" lg={8} sm={12} xs={12}>
          <CartTable/> 
        </Col>

        <Col className="checkoutCard" lg={4} sm={12} xs={12}>
          <CheckoutBox/> 
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

export default Cart;
