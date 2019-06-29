import React from "react";

import Image from "react-bootstrap/Image";

import "./Tile.css";

export default class Product extends React.Component {
  render() {
    return (
      <div className="tileContainer">
        <Image
          className="tileImage"
          fluid
          src="https://lsco.scene7.com/is/image/lsco/19_JUNE_HP_D1_M_Desktop?$ZF$&wid=736"
        />
        <div className="tileTitleContainer">
          <span className="tileTitle">Shop Men</span>
        </div>
      </div>
    );
  }
}
