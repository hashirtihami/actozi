import React from "react";
// import logo from "./logo.svg";
import "./Admin.css";
import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HeaderAdmin from "../HeaderAdmin/Header";
import Orders from '../Orders/Orders';
import ExistingProducts from '../ExistingProducts/ExistingProducts';
import CreateProduct from '../CreateProduct/CreateProduct';

function Admin() {
  return (
  <Router> 
    <div className="App">
      <HeaderAdmin />
      <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/home"  component={Home}/>
      <Route path="/existingproducts" component={ExistingProducts}/>
      <Route path="/orders" component={Orders}/>
      <Route path="/createproducts" component={CreateProduct}/>
      </Switch>    
    </div>
  </Router>
    
  );
}

const Home = () => (
  <div>
    <h1>Welcome nigga</h1>
  </div>
);

export default Admin;
