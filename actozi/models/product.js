const db = require("./db/config");

const Product = {};

Product.findAll = () => {
  db.query("Select * from product", function(err, result, field) {
    return result;
  });
};
