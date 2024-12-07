import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import nhuom1 from "../assets/nhuom1.jpg";
import nhuom2 from "../assets/nhuom2.jpg";
import uon1 from "../assets/uon1.jpg";
import duoi1 from "../assets/duoi1.jpg";
import duoi2 from "../assets/duoi2.jpg";
import combo1 from "../assets/combo1.jpg";
import combo2 from "../assets/combo2.jpg";
import combo3 from "../assets/combo3.jpg";
import combo4 from "../assets/combo4.jpg";
import combo5 from "../assets/combo5.jpg";
import combo6 from "../assets/combo6.jpg";
import "../css/Service.css";
// Danh sách hình ảnh cho từng dịch vụ
const services = [
  {
    title: "Combo Basic",
    images: [combo1, combo2, combo3, combo4, combo5, combo6],
  },
  {
    title: "Duỗi",
    images: [duoi1, duoi2],
  },
  {
    title: "Uốn",
    images: [uon1],
  },
  {
    title: "Nhuộm",
    images: [nhuom1, nhuom2],
  },
];

function Service() {
  return (
    <>
      <Navbar />
      <div className="px-4 py-6">
        {/* Tiêu đề */}

        <h1 className="text-2xl md:text-3xl font-semibold text-center mt-16 sm:mt-20 animate-zoomInColorChange">
          DỊCH VỤ
        </h1>

        {/* Các loại dịch vụ - Bố cục ngang */}
        <div className="mt-10 flex flex-wrap justify-center gap-8">
          {services.map((service, index) => (
            <div key={index} className="text-center sm:w-72">
              <h2 className="text-2xl font-semibold mb-4 border-b-2 border-gray-300 pb-2">
                {service.title}
              </h2>
              <div className="relative">
                {service.images.map((image, idx) => (
                  <div
                    key={idx}
                    className="aspect-w-1 aspect-h-1 mb-4 overflow-hidden relative group"
                  >
                    <img
                      src={image}
                      alt={`${service.title} ${idx + 1}`}
                      className="w-full h-full object-cover transition-opacity group-hover:opacity-50"
                    />
                    {/* Nút "Book Now!" cho mỗi hình ảnh, đặt trước ảnh */}
                    <button className="absolute inset-0 flex justify-center items-center m-auto w-28 h-10 bg-orange-600 text-white font-semibold rounded-md opacity-0 group-hover:opacity-100 transition-opacity z-10">
                      Book ngay!
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Service;
