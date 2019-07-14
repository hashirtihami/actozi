const db = require("../db/config");

const Product = {};

Product.findAll = handler => {
  db.query("SELECT * FROM product", function(error, results) {
    handler(error, results);
  });
};

Product.create = (product, handler) => {
  console.log(product.body);
  db.query(
    "INSERT INTO product (category, name, `desc`, url, price) VALUES (?,?,?,?,?)",
    [
      product.body.category,
      product.body.prodName,
      product.body.desc,
      "url",
      product.body.price
    ],
    function(error, results) {
      handler(error);
    }
  );
};

module.exports = Product;
