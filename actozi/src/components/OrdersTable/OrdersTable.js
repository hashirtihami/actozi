import React from "react";
// import logo from "./logo.svg";
import "../Admin/Admin.css";
import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AddImageButton from "../AddImageButton/AddImageButton"
import { Table, Button, Form, Row, Col } from 'react-bootstrap';
function OrdersTable() {
    return (
        <div class="container">
            <Table striped bordered hover>
            <thead>
                <tr>
                <th>#ID</th>
                <th>Order By</th>
                <th>Product</th>
                <th>Date</th>
                <th>Options</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>1</td>
                <td>Khalid </td>
                <td>Shirts</td>
                <td>500</td>
                <td>@mdo</td>
                </tr>
                <tr>
                <td>2</td>
                <td>Mr. Mustafa</td>
                <td>Shirts</td>
                <td>500</td>
                <td>@fat</td>
                </tr>
                <tr>
                <td>3</td>
                <td>Minahil Ovais</td>
                <td>Shirts</td>
                <td>500</td>
                <td>@twitter</td>
                </tr>
            </tbody>
        </Table>
    </div>
    )
}

export default OrdersTable;
