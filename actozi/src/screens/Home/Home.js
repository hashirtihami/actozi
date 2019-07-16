import React from "react";
import axios from "axios";

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
import ProductTile from "../../components/ProductTile/ProductTile";

class Home extends React.Component {
  state = {
    products: []
  };

  componentDidMount() {
    axios.get("/api/products/").then(response => {
      this.setState({ products: response.data.data });
    });
  }

  createProductTile = product => {
    console.log(product);
    return (
      <Col md lg key={product.productId}>
        <ProductTile
          category={product.category}
          name={product.name}
          desc={product.desc}
          url={product.url}
          price={product.price}
        />
      </Col>
    );
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col lg={12} className="no-padding">
            <Header />
          </Col>
        </Row>
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
        <Row className="featured margin-top">
          <h1>Featured Products</h1>
        </Row>
        <Row className="grid">
          {this.state.products.length !== 0 ? (
            this.state.products.map(product => this.createProductTile(product))
          ) : (
            <div>Loading</div>
          )}
        </Row>
        <Row>
          <Col lg={12} className="no-padding">
            <Footer />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
