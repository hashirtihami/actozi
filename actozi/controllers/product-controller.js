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

module.exports = productController;
