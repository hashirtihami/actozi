const express = require('express');
const cors = require('cors');
var mysql = require('mysql');
const app= express();

const selectAllProductsQuery = 'SELECT * FROM products';
var con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'actozi'
});
con.connect(err => {
  if(err){
    return err;
  }
});

app.use(cros());

app.get('/', (req,res)=> {
  
})


