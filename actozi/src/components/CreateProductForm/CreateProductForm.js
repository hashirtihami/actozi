import React from "react";
import axios from "axios";
// import logo from "./logo.svg";
import "../Admin/Admin.css";
import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AddImageButton from "../AddImageButton/AddImageButton";
import { Button, Form, Row, Col } from "react-bootstrap";

class CreateProductForm extends React.Component {
  state = {
    size: []
  };

  handleChange = event => {
    console.log(event.target.value);
    this.setState({ [event.target.name]: event.target.value });
  };

  //This is broken
  handleSizeChange = event => {
    let value = event.target.value;
    this.setState(prevState => {
      if (prevState.size.includes(value)) {
        return {
          size: [...prevState.size]
        };
      } else return { size: [...prevState.size, value] };
    });
    console.log(this.state.size);
  };

  submitForm = () => {
    axios.post("/api/products/newProduct", {
      ...this.state
    });
  };

  render() {
    return (
      <div class="container">
        <h4>Add Product</h4>
        <hr />
        <Form onSubmit={this.submitForm}>
          <Form.Group as={Row} controlId="formHorizontalCategory">
            <Form.Label column sm={2}>
              Product category
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                name="category"
                placeholder="Enter the product category (Eg. Shoe, Shirt, Pants etc"
                onChange={this.handleChange}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formHorizontalProduct">
            <Form.Label column sm={2}>
              Product Name
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                name="prodName"
                placeholder="Enter product name here"
                onChange={this.handleChange}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formHorizontalDesc">
            <Form.Label column sm={2}>
              Product Description
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                name="desc"
                as="textarea"
                rows="4"
                placeholder="Enter product description here"
                onChange={this.handleChange}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formHorizontalPrice">
            <Form.Label column sm={2}>
              Product Price
            </Form.Label>
            <Col sm={4}>
              <Form.Control
                name="price"
                placeholder="Enter product price here"
                onChange={this.handleChange}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formHorizontalDesc">
            <Form.Label column sm={2}>
              Add Product Image
            </Form.Label>
            <Col sm={10}>
              <AddImageButton />
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
                  label="Small"
                  name="size"
                  value="S"
                  id="formHorizontalSize1"
                  onChange={this.handleSizeChange}
                />
                <Form.Check
                  type="checkbox"
                  label="Medium"
                  name="size"
                  value="M"
                  id="formHorizontalSize2"
                  onChange={this.handleSizeChange}
                />
                <Form.Check
                  type="checkbox"
                  label="Large"
                  name="size"
                  value="L"
                  id="formHorizontalSize3"
                  onChange={this.handleSizeChange}
                />
                <Form.Check
                  type="checkbox"
                  label="Extra Large"
                  name="size"
                  value="XL"
                  id="formHorizontalSize4"
                  onChange={this.handleSizeChange}
                />
              </Col>
            </Form.Group>
          </fieldset>

          <Form.Group as={Row}>
            <Col sm={{ span: 10, offset: 2 }}>
              <Button variant="outline-dark" type="submit">
                Add Product
              </Button>
            </Col>
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default CreateProductForm;
