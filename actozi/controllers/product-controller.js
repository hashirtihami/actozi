const Product = require("../models/product");

const productController = {};

productController.findAll = (req, res) => {
  Product.findAll((err, products) => {
    if (err) {
      console.log(err);
      res.status(500).json(err);
    }
    console.log("products");
    res.json({
      message: "Success",
      data: products
    });
  });
};

productController.create = (req, res) => {
  Product.create(req, err => {
    if (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
};

module.exports = productController;
