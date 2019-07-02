import React from "react";
// import logo from "./logo.svg";
import "../Admin/Admin.css";
import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AddImageButton from "../AddImageButton/AddImageButton"
import { Table, Button, Form, Row, Col } from 'react-bootstrap';
function CartTable() {
    return (
        <div class="container">
            <Table striped bordered hover>
            <thead>
                <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Options</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>1</td>
                <td>Black Shirt</td>
                <td>500</td>
                <td>@mdo</td>
                <td>delete</td>
                </tr>
                <tr>
                <td>2</td>
                <td>Red Shirt</td>
                <td>500</td>
                <td>500</td>
                <td>delete</td>
                </tr>
                <tr>
                <td>3</td>
                <td>trouser</td>
                <td>500</td>
                <td>500</td>
                <td>delete</td>
                </tr>
            </tbody>
        </Table>
    </div>
    )
}

export default CartTable;
