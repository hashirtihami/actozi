const express = require("express");
const productRouter = express.Router();

const productController = require("../controllers/product-controller.js");

productRouter.get("/", productController.findAll);
productRouter.post("/newProduct", productController.create);

module.exports = productRouter;
