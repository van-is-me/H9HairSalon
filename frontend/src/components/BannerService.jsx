import React from "react";
import Slider from "react-slick";
import UonSongBuong from "../assets/UongSongBuong.jpg";
import Hippe from "../assets/Hippi.jpg";
import Hidden from "../assets/HiddenLight.jpg";
import naukiwi from "../assets/nhuomnaukiwi.jpg";
import kiwi from "../assets/naaukiwi.jpg";

import "../css/BannerService.css";

function BannerService() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const images = [
    {
      src: UonSongBuong,
      title: "Uốn kiểu Sóng Bung",
      content: "Sành điệu, hài hoà với gương mặt",
    },
    {
      src: Hippe,
      title: "Uốn kiểu xoăn hippi",
      content: "Phong cách tự do, phóng khoáng",
    },
    {
      src: Hidden,
      title: "Nhuộm Hidden Light",
      content: "Vẻ đẹp cá tính, thời thượng và đầy sức hút",
    },
    {
      src: naukiwi,
      title: "Nhuộm ánh khói",
      content: "Sắc thái nhẹ nhàng, tự nhiên và có khả năng tôn da hiệu quả",
    },
    {
      src: kiwi,
      title: "Nhuộm nâu Kiwi",
      content: "phong cách sành điệu, cá tính và xu hướng hiện đại",
    },
  ];

  return (
    <div className="slider-container-1 mt-16 mb-4">
      {/* Tiêu đề */}

      <h2 className="mt-4 text-2xl md:text-3xl font-semibold flex justify-center items-center text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 mb-4 animate-pulse">
        Dịch vụ nổi bật
      </h2>
      {/* Slider */}
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="custom-slick-slide">
            <div className="image-container">
              <img
                src={image.src}
                alt={`Slide ${index + 1}`}
                className="custom-slick-image"
              />
              <div className="text-overlay">
                <h3 className="text-sm md:text-lg">{image.title}</h3>
                <p className="text-xs  md:text-sm leading-relaxed">
                  {image.content}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default BannerService;
