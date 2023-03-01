import React, { Component } from "react";

import Slider from "react-slick";

// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";

export default class Slicker extends Component {
  render() {
    var settings = {

      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 7,
      slidesToScroll: 3
    };
    return (
      <div className="slicker">
        <Slider {...settings} className="slider__form">
          <div>
            <img src={require("../img/poster-1.jpg")} alt="poster" className="poster__image" />
          </div>
          <div>
            <img src={require("../img/poster-2.jpg")} alt="poster" className="poster__image" />
          </div>
          <div>
            <img src={require("../img/poster-3.jpg")} alt="poster" className="poster__image" />
          </div>
          <div>
            <img src={require("../img/poster-4.jpg")} alt="poster" className="poster__image" />
          </div>
          <div>
            <img src={require("../img/poster-5.jpg")} alt="poster" className="poster__image" />
          </div>
          <div>
            <img src={require("../img/poster-6.jpg")} alt="poster" className="poster__image" />
          </div>
          <div>
            <img src={require("../img/poster-7.jpg")} alt="poster" className="poster__image" />
          </div>
          <div>
            <img src={require("../img/poster-8.jpg")} alt="poster" className="poster__image" />
          </div>
          <div>
            <img src={require("../img/poster-9.jpg")} alt="poster" className="poster__image" />
          </div>
          <div>
            <img src={require("../img/poster-10.jpg")} alt="poster" className="poster__image" />
          </div>
        </Slider>
      </div>
    );
  }
}