import React from "react";
// import logo from "./logo.svg";
import "../Admin/Admin.css";
import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeaderAdmin from "../HeaderAdmin/Header";
import OrdersTable from "../OrdersTable/OrdersTable";

function Orders() {
  return (
    <div>
      <OrdersTable/>
    </div>
  );
}

export default Orders;
