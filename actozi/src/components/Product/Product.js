import React from "react";

import Image from "react-bootstrap/Image";

import "./Product.css";

export default class Product extends React.Component {
  render() {
    return (
      <div className="productContainer">
        <div>
          <Image
            className="productImage"
            fluid
            src="https://scontent.fkhi8-1.fna.fbcdn.net/v/t1.0-9/64443102_1597979237000345_6578358883364896768_n.jpg?_nc_cat=100&_nc_oc=AQkgAuPSSIQ-MBN48c7_YvbLMxZU4FIRhAX8RC9tC5G53ce8jrx36JnSC3CkmbUzH_Y&_nc_ht=scontent.fkhi8-1.fna&oh=187a77e359d5cf6e67d63228615f9937&oe=5DB4AA1D"
          />
        </div>
        <div className="productInfo">
          <a className="productTitle">
            <span>Captain America Tshirt</span>
          </a>
          <div className="productPrice">
            <span>Rs 900/-</span>
          </div>
        </div>
      </div>
    );
  }
}
