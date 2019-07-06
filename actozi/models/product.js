const db = require("../db/config");

const Product = {};

Product.findAll = handler => {
  db.query("SELECT * FROM product", function(error, results) {
    handler(error, results);
  });
};

module.exports = Product;
