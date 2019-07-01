import React from "react";
import Slider from "react-slick";

import "./Carousel.css";

export default class Carousel extends React.Component {
  render() {
    const settings = {
      arrows: false,
      dots: true,
      infinite: true,
      speed: 700,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      autoplay: true,
      autoplaySpeed: 2000
    };
    return (
      <div id="carousel">
        <Slider {...settings}>
          <div id="carousel-item-1" />
          <div id="carousel-item-2" />
          <div id="carousel-item-3" />
        </Slider>
      </div>
    );
  }
}
