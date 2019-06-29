import React from "react";
// import logo from "./logo.svg";
import "../Admin/Admin.css";
import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductsTable from "../ProductsTable/ProductsTable";


function ExistingProducts() {
  return (
    <div>
      <ProductsTable/>
    </div>
  );
}

export default ExistingProducts;
