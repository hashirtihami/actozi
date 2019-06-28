import React from "react";
// import logo from "./logo.svg";
import "../Admin/Admin.css";
import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//import HeaderAdmin from "../HeaderAdmin/Header";
import CreateProductForm from "../CreateProductForm/CreateProductForm";


function CreateProduct() {
  return (
    <div>
       <CreateProductForm/>
    </div>
  );
}

export default CreateProduct;
