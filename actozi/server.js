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

const db = require("./db/config");

// connection.connect()

// connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
//   if (err) throw err

//   console.log('The solution is: ', rows[0].solution)
// })

// connection.end()
