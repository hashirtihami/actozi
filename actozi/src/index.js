import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ProductDetails from "./screens/ProductDetails/ProductDetails";
import Home from "./screens/Home/Home";
import Cart from "./screens/Cart/Cart";
import Registration from "./screens/Registration/Registration";
import Admin from "./components/Admin/Admin";
import About from "./screens/About/About.js";

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/home" component={Home} />
      <Route path="/cart" component={Cart} />
      <Route path="/registration" component={Registration} />
      <Route path="/product/1" exact component={ProductDetails} />
      <Route path="/admin" component={Admin} />
      <Route path="/about" component={About} />
    </Switch>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
