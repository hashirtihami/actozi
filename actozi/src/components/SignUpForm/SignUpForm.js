import React from "react";
// import logo from "./logo.svg";
import "../Admin/Admin.css";
import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AddImageButton from "../AddImageButton/AddImageButton"
import { Button, Form, Row, Col } from 'react-bootstrap';


function SignUpForm() {
  return (
    <div class="container bla signup">
      <h4>Sign Up</h4>
      <hr/>
      <Form>
        <Form.Group as={Row} controlId="formHorizontalCategory">
          <Form.Label column sm={2}>
            Name:
          </Form.Label>
          <Col>
            <Form.Control placeholder="First name" />
          </Col>
          <Col>
            <Form.Control placeholder="Last name" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formHorizontalProduct">
          <Form.Label column sm={2}>
            Email:
          </Form.Label>
          <Col sm={10}>
            <Form.Control placeholder="Enter your email here" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formHorizontalProduct">
          <Form.Label column sm={2}>
            Password:
          </Form.Label>
          <Col sm={10}>
            <Form.Control placeholder="Enter your password here" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formHorizontalProduct">
          <Form.Label column sm={2}>
            Address
          </Form.Label>
          <Col sm={10}>
            <Form.Control placeholder="Enter Address here" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formHorizontalPrice">
          <Form.Label column sm={2}>
            Contact:
          </Form.Label>
          <Col sm={4}>
            <Form.Control placeholder="Enter contact number here" />
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Col sm={{ span: 10, offset: 2 }}>
            <Button variant="outline-dark" type="submit">Sign Up</Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
}

export default SignUpForm;
