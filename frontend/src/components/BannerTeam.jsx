import React from "react";
import Slider from "react-slick"; // Import react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ahieu from "../assets/ahieu.jpg";
import adung from "../assets/adung.jpg";
import chioanh from "../assets/lamoanh.jpg";
import tai from "../assets/tai.jpg";
import bgteam from "../assets/bg_team.jpg";
import "../css/BannerTeam.css";

function BannerTeam() {
  // Cấu hình của Slick Slider
  const settings = {
    dots: true, // Hiển thị dot navigation
    infinite: true, // Cho phép cuộn vô hạn
    speed: 500, // Tốc độ chuyển slide
    slidesToShow: 4, // Hiển thị 4 nhân viên trên desktop
    slidesToScroll: 1, // Mỗi lần cuộn 1 slide
    responsive: [
      {
        breakpoint: 1024, // Trên desktop
        settings: {
          slidesToShow: 3, // Hiển thị 3 nhân viên
        },
      },
      {
        breakpoint: 768, // Trên tablet
        settings: {
          slidesToShow: 2, // Hiển thị 2 nhân viên
        },
      },
      {
        breakpoint: 480, // Trên di động
        settings: {
          slidesToShow: 1, // Hiển thị 1 nhân viên
        },
      },
    ],
  };

  return (
    <div
      className="bg-cover bg-center h-screen"
      style={{ backgroundImage: `url(${bgteam})` }}
    >
      <div className="flex justify-center items-center h-full">
        <div className="px-4 md:px-16 w-full max-w-screen-xl">
          {/* Tiêu đề */}
          <div className="text-center mb-8">
            <h2 className="text-xl md:text-3xl font-semibold text-white">
              Đội ngũ nhân viên chuyên nghiệp
            </h2>
            <h3 className="text-lg md:text-2xl font-semibold text-white">
              Sáng tạo - Phong cách - Cá tính
            </h3>
          </div>

          {/* Slider phần nhân viên */}
          <Slider {...settings} className="custom1-slider">
            {/* Nhân viên 1 */}
            <div className="text-center">
              <div className="relative w-full aspect-w-2 aspect-h-3">
                <img
                  src={ahieu}
                  alt="Ahieu"
                  className="object-cover rounded-lg mx-auto mb-4 border-4 border-white"
                />
              </div>
              <p className="text-lg font-semibold text-white">
                Nguyễn Thanh Hiếu
              </p>
              <p className="text-white">Chuyên gia tóc</p>
            </div>

            {/* Nhân viên 3 */}
            <div className="text-center">
              <div className="relative w-full aspect-w-2 aspect-h-3">
                <img
                  src={chioanh}
                  alt="Chioanh"
                  className="object-cover rounded-lg mx-auto mb-4 border-4 border-white"
                />
              </div>
              <p className="text-lg font-semibold text-white">Thị Lâm Oanh</p>
              <p className="text-white">Kĩ thuật viên chuyên nghiệp</p>
            </div>

            {/* Nhân viên 2 */}
            <div className="text-center">
              <div className="relative w-full aspect-w-2 aspect-h-3">
                <img
                  src={adung}
                  alt="A Dung"
                  className="object-cover rounded-lg mx-auto mb-4 border-4 border-white"
                />
              </div>
              <p className="text-lg font-semibold text-white">Bùi Quang Dũng</p>
              <p className="text-white">Kĩ thuật viên chuyên nghiệp</p>
            </div>

            {/* Nhân viên 4 (có thể thêm vào trong tương lai) */}
            <div className="text-center">
              <div className="relative w-full aspect-w-2 aspect-h-3">
                <img
                  src={tai}
                  alt="tai"
                  className="object-cover rounded-lg mx-auto mb-4 border-4 border-white"
                />
              </div>
              <p className="text-lg font-semibold text-white">Tài</p>
              <p className="text-white">Kỹ thuật viên chuyên nghiệp</p>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default BannerTeam;
