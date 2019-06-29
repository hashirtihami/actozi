import React from "react";
// import logo from "./logo.svg";
import "../Admin/Admin.css";
import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Button, Form, Row, Col } from 'react-bootstrap';


function CreateProductForm() {
  return (
    <div class="container">
      <Form>
        <Form.Group as={Row} controlId="formHorizontalCategory">
          <Form.Label column sm={2}>
            Product category
          </Form.Label>
          <Col sm={10}>
            <Form.Control placeholder="Enter the product category (Eg. Shoe, Shirt, Pants etc" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formHorizontalProduct">
          <Form.Label column sm={2}>
            Product Name
          </Form.Label>
          <Col sm={10}>
            <Form.Control placeholder="Enter product name here" />
          </Col>
        </Form.Group>

        <fieldset>
          <Form.Group as={Row}>
            <Form.Label as="legend" column sm={2}>
              Size
            </Form.Label>
            <Col sm={10}>
              <Form.Check
                type="checkbox"
                label="first radio"
                name="formHorizontalRadios"
                id="formHorizontalRadios1"
              />
              <Form.Check
                type="checkbox"
                label="second radio"
                name="formHorizontalRadios"
                id="formHorizontalRadios2"
              />
              <Form.Check
                type="checkbox"
                label="third radio"
                name="formHorizontalRadios"
                id="formHorizontalRadios3"
              />
            </Col>
          </Form.Group>
        </fieldset>

        <Form.Group as={Row}>
          <Col sm={{ span: 10, offset: 2 }}>
            <Button type="submit">Sign in</Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
}

export default CreateProductForm;
