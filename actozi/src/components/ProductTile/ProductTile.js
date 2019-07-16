import React from "react";
import axios from "axios";

import Image from "react-bootstrap/Image";

import "./ProductTile.css";

export default class ProductTile extends React.Component {
  render() {
    return (
      <div className="productContainer">
        <div>
          <Image className="productImage" fluid src={this.props.url} />
        </div>
        <div className="productInfo">
          <a className="productTitle">
            <span>{this.props.name}</span>
          </a>
          <div className="productPrice">
            <span>{this.props.price}/-</span>
          </div>
        </div>
      </div>
    );
  }
}
