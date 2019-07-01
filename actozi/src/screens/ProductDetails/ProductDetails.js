import React from "react";
// import logo from "./logo.svg";
import "./ProductDetails.css";
import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactImageMagnify from "react-image-magnify";
import {
  Row,
  Col,
  Container,
  Image,
  Form,
  Button,
  ButtonGroup,
  ToggleButton
} from "react-bootstrap";

import img from "../../assets/1.jpg";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function ProductDetails() {
  return (
    <Container fluid>
      <Row>
        <Col lg={12} className="no-padding">
          <Header />
        </Col>
      </Row>
      <Row className="full-height">
        <Col lg={6}>
          <ReactImageMagnify
            {...{
              smallImage: {
                alt: "Nike",
                isFluidWidth: true,
                src: img
              },
              largeImage: {
                src: img,
                width: 1263,
                height: 842
              },
              enlargedImagePosition: "over"
            }}
          />
        </Col>
        <Col lg={6}>
          <h1>Captain America Tshirt</h1>
          <h2>PKR 990/-</h2>
          <Form>
            <Row>
              <Col lg={6} md={6}>
                <h3>Size:</h3>
                <ButtonGroup toggle className="mb-3 sizes btn-block">
                  <ToggleButton
                    type="radio"
                    name="size"
                    defaultChecked
                    value="small"
                    variant="outline-secondary"
                  >
                    S
                  </ToggleButton>
                  <ToggleButton
                    type="radio"
                    name="size"
                    value="medium"
                    variant="outline-secondary"
                  >
                    M
                  </ToggleButton>
                  <ToggleButton
                    type="radio"
                    name="size"
                    value="large"
                    variant="outline-secondary"
                  >
                    L
                  </ToggleButton>
                </ButtonGroup>
              </Col>
            </Row>

            <Row>
              <Col lg={3} md={3}>
                <Form.Label>
                  <h3>Quantity:</h3>
                </Form.Label>
              </Col>
              <Col lg={3} md={3}>
                <Form.Control type="number" min="1" max="10" placeholder="1" />
              </Col>
              <Col lg={6}>
                <Button type="submit" block>
                  Add to Cart
                </Button>
              </Col>
            </Row>
          </Form>
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

export default ProductDetails;
