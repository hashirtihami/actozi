import React from "react";
// import logo from "./logo.svg";
import wallpaper from "./wall.jpg";
import "./Admin.css";
import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HeaderAdmin from "../HeaderAdmin/Header";
import Orders from "../Orders/Orders";
import ExistingProducts from "../ExistingProducts/ExistingProducts";
import CreateProduct from "../CreateProduct/CreateProduct";

function Admin() {
  return (
    <Router>
      <div className="App">
        <HeaderAdmin />
        <div class="wallpaper">
          <img src={wallpaper} />
        </div>
        <Switch>
          <Route path="/admin" exact component={Home} />
          <Route path="/admin/home" component={Home} />
          <Route path="/admin/existingproducts" component={ExistingProducts} />
          <Route path="/admin/orders" component={Orders} />
          <Route path="/admin/createproducts" component={CreateProduct} />
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
//  i didnt do shit
export default Admin;
