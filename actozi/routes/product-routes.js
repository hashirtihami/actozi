const express = require("express");
const productRouter = express.Router();

const productController = require("../controllers/product-controller.js");

productRouter.get("/", productController.findAll);

module.exports = productRouter;
