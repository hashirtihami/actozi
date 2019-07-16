import React from "react";

import Image from "react-bootstrap/Image";

import "./Tile.css";

export default class Product extends React.Component {
  render() {
    return (
      <div className="tileContainer">
        <Image className="tileImage" fluid src={this.props.url} />
        <div className="tileTitleContainer">
          <span className="tileTitle">{this.props.title}</span>
        </div>
      </div>
    );
  }
}
