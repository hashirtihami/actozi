import React from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Product from "../Product/Product";

import "./Grid.css";

export default class Grid extends React.Component {
  render() {
    return (
      <div className="grid">
        <Row>
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
      </div>
    );
  }
}
