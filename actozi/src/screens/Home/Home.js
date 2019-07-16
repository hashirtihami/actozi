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
    console.log(this.state.products);
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

  createProductGrid = () => {
    let parent = [];
    for (let i = 0; i < this.state.products.length; ) {
      console.log(i);
      let children = [];
      for (let j = 0; j < 4; j++, i++) {
        children.push(
          <Col md lg key={this.state.products[i].productId}>
            <ProductTile
              category={this.state.products[i].category}
              name={this.state.products[i].name}
              desc={this.state.products[i].desc}
              url={this.state.products[i].url}
              price={this.state.products[i].price}
            />
          </Col>
        );
      }
      parent.push(
        <Row key={i} className="grid">
          {children}
        </Row>
      );
    }
    console.log(parent);
    return parent;
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
            <Tile
              title="Shop Jeans"
              url="https://images.unsplash.com/photo-1555689502-c4b22d76c56f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
            />
          </Col>
          <Col lg={4} sm={4} xs={4}>
            <Tile
              title="Shop Tshirts"
              url="https://images.unsplash.com/photo-1521043330514-61d46d71684c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            />
          </Col>
          <Col lg={4} sm={4} xs={4}>
            <Tile
              title="Shop Kids Wear"
              url="https://images.unsplash.com/photo-1513787345924-e09d880a19a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80"
            />
          </Col>
        </Row>
        <Row className="featured margin-top">
          <h1>Featured Products</h1>
        </Row>
        <Row className="grid">
          {this.state.products.length !== 0 ? (
            this.createProductGrid()
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
