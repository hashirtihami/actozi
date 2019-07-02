import React from "react";
// import logo from "./logo.svg";
import "../Admin/Admin.css";
import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AddImageButton from "../AddImageButton/AddImageButton"
import { Button, Form, Row, Col } from 'react-bootstrap';


function LogInForm() {
  return (
    <div class="container bla">
      <h4>Log In</h4>
      <hr/>
      <Form>
        <Form.Group as={Row} controlId="formHorizontalProduct">
          <Form.Label column sm={2}>
            Email:
          </Form.Label>
          <Col sm={4}>
            <Form.Control placeholder="Enter your email here" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formHorizontalProduct">
          <Form.Label column sm={2}>
            Password:
          </Form.Label>
          <Col sm={4}>
            <Form.Control placeholder="Enter your password here" />
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

export default LogInForm;
