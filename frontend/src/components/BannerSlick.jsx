import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/BannerSlick.css"; // Đảm bảo đường dẫn đúng

import LogoNgang from "../assets/LogoNgang.jpg";
import Slick1 from "../assets/Slick1.jpg";
import Anhslickk from "../assets/Anhslickk.jpg";
import Anhslick2 from "../assets/Anhslick2.jpg";

function BannerSlick() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    cssEase: "linear",
    arrows: true,
  };

  return (
    <div className="banner-wrapper">
      <div className="slider-container">
        <Slider {...settings}>
          <div>
            <img src={LogoNgang} alt="Logo Ngang" />
          </div>
          <div>
            <img src={Slick1} alt="Slick 1" />
          </div>
          <div>
            <img src={Anhslickk} alt="Slick 1" />
          </div>
          <div>
            <img src={Anhslick2} alt="Slick 1" />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default BannerSlick;
