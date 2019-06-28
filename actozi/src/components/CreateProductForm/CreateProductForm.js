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
        <Form.Row>
          <Form.Group as={Col} controlId="category">
            <Form.Label>Product Category</Form.Label>
            <Form.Control placeholder="Enter Category name here (Shoe, shirt, etc..)" />
          </Form.Group>

          <Form.Group as={Col} controlId="productName">
            <Form.Label>Product Name</Form.Label>
            <Form.Control placeholder="Enter product name here" />
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="aboutProduct">
          <Form.Label>About Product</Form.Label>
          <Form.Control placeholder="Information about product " />
        </Form.Group>
        <Form.Row>
          <fieldset>
            <Form.Group as={Row}>
              <Form.Label as="legend" column sm={2}>
                Sizes
              </Form.Label>
              <Col sm={10}>
                <Form.Check
                  type="radio"
                  label="Small"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios1"
                />
                <Form.Check
                  type="radio"
                  label="Medium"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios2"
                />
                <Form.Check
                  type="radio"
                  label="Large"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios3"
                />
                <Form.Check
                  type="radio"
                  label="Extra Large"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios3"
                />
              </Col>
            </Form.Group>
          </fieldset>
          <Form.Group as={Col} controlId="Price">
            <Form.Label>Price</Form.Label>
            <Form.Control />
          </Form.Group>
        </Form.Row>
        
        <Button variant="primary" type="submit">
        Submit
        </Button>

      </Form>
    </div>
  );
}

export default CreateProductForm;
