// const express = require('express');
// const app = express();
// const PORT = process.env.PORT || 3000;

// app.get('/', (req, res) => {
//   res.send('Hello, world!');
// });  bla bla bla

// app.listen(PORT, () => {
//   console.log(`App is up and running. Listening on port ${PORT}`);
// });
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

// Import Path
const path = require("path");

// Static files
app.use(express.static(path.join(__dirname, "build")));

app.use("/api/products", require("./routes/product-routes"));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/index.html"));
});

app.listen(PORT, () => {
  console.log(`App is up and running. Listening on port ${PORT}`);
});

// connection.connect()

// connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
//   if (err) throw err

//   console.log('The solution is: ', rows[0].solution)
// })

// connection.end()
