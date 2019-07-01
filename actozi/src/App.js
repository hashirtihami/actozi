import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Header from "./components/Header/Header";
import Carousel from "./components/Carousel/Carousel";
import Footer from "./components/Footer/Footer";
import Grid from "./components/Grid/Grid";
import Tile from "./components/Tile/Tile";
import { Row, Col, Container } from "react-bootstrap";

function App() {
  return (
    <Container fluid>
      <Header />
      <Row>
        <Col lg={12} className="no-padding">
          <Carousel />
        </Col>
      </Row>
      <Row
        style={{
          marginTop: 50
        }}
      >
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
      <Row>
        <Col lg={12}>
          <Grid />
        </Col>
      </Row>
      <Row>
        <Col lg={12} className="no-padding">
          <Footer />
        </Col>
      </Row>
    </Container>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
