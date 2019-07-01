import React from "react";
// import logo from "./logo.svg";
import "../../screens/Home/Home.css";
import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AddImageButton from "../AddImageButton/AddImageButton"
import { Table, ToggleButton, Button, Form, Row, Col, Card} from 'react-bootstrap';
function CheckoutBox() {
    return (
        <div class="container">
            <Card bg="dark" text="white" style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Checkout</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Order Summary </Card.Subtitle> 
                    <Card.Text>
                        Shipping Fee : <span className="priceBox">100 Rs.</span>
                    </Card.Text>
                    <Card.Text>
                        Total Cost : <span className="priceBox">10000 Rs.</span>
                    </Card.Text>
                    <div className="d-flex flex-column">
                    <Button>Checkout</Button>
                    
                    
                    </div>
                    {/* <Card.Link href="#">Another Link</Card.Link> */}
                </Card.Body>
            </Card>
    </div>
    )
}

export default CheckoutBox;
