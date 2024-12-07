import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import Font Awesome
import bgct from "../assets/bg_dknt.jpg";

function BannerContact() {
  return (
    <div
      className="bg-cover bg-center h-screen flex justify-center items-center"
      style={{ backgroundImage: `url(${bgct})` }}
    >
      <div className="flex flex-col md:flex-row w-full max-w-6xl bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Bên trái: Form đăng ký tư vấn */}
        <div className="flex-1 p-8 bg-gray-100">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4 text-center">
            Đăng ký tư vấn
          </h2>
          <form className="space-y-4">
            {/* Họ và tên */}
            <div>
              <label className="block text-gray-700 text-xs sm:text-sm md:text-lg font-semibold mb-2">
                Họ và tên
              </label>
              <input
                type="text"
                className="text-xs sm:text-sm md:text-lg w-full border border-gray-300 rounded-lg p-3"
                placeholder="Nhập họ và tên"
              />
            </div>
            {/* Email */}
            <div>
              <label className="block text-gray-700 text-xs sm:text-sm md:text-lg font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                className="text-xs sm:text-sm md:text-lg w-full border border-gray-300 rounded-lg p-3"
                placeholder="Nhập email"
              />
            </div>
            {/* Số điện thoại */}
            <div>
              <label className="block text-gray-700 text-xs sm:text-sm md:text-lg font-semibold mb-2">
                Số điện thoại
              </label>
              <input
                type="tel"
                className="text-xs sm:text-sm md:text-lg w-full border border-gray-300 rounded-lg p-3"
                placeholder="Nhập số điện thoại"
              />
            </div>
            {/* Địa chỉ */}
            <div>
              <label className="text-xs sm:text-sm md:text-lg block text-gray-700 font-semibold mb-2">
                Địa chỉ
              </label>
              <input
                type="text"
                className="text-xs sm:text-sm md:text-lg w-full border border-gray-300 rounded-lg p-3"
                placeholder="Nhập địa chỉ"
              />
            </div>
            <div>
              <label className="text-xs sm:text-sm md:text-lg block text-gray-700 font-semibold mb-2">
                Dịch vụ quan tâm
              </label>
              <input
                type="text"
                className="text-xs sm:text-sm md:text-lg w-full border border-gray-300 rounded-lg p-3"
                placeholder="Nhập dịch vụ quan tâm"
              />
            </div>
            {/* Button */}
            <div className="w-full flex justify-center">
              <button className="bg-black text-white py-1 px-2 md:py-2 md:px-4 rounded-md md:rounded-lg hover:bg-orange-500 hover:text-black transition">
                <span className="text-xs sm:text-sm md:text-lg">
                  Đăng kí tư vấn ngay!
                </span>
              </button>
            </div>
          </form>
        </div>

        {/* Bên phải: Thông tin liên hệ */}
        <div className="flex-1 p-8 bg-white flex flex-col justify-center items-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4 text-center">
            Thông tin liên hệ
          </h2>
          <p className="sm:mx-10 text-xs sm:text-sm text-gray-500 mb-4">
            Quý khách hàng cũng có thể liên hệ với chúng tôi qua các kênh liên
            hệ dưới để để được tư vấn và hỗ trợ nhanh nhất!
          </p>
          <div className="space-y-4">
            {/* Zalo */}
            <div className="flex items-center space-x-4 p-4 bg-gray-100 rounded-lg transition hover:bg-gray-800 hover:text-white">
              <i className="text-black text-xs sm:text-sm md:text-lg fas fa-comment-dots hover:text-white"></i>
              <span className="text-gray-700 hover:text-white text-xs sm:text-sm md:text-lg">
                Zalo: 0933 534 923
              </span>
            </div>
            {/* Email */}
            <div className="flex items-center space-x-4 p-4 bg-gray-100 rounded-lg transition hover:bg-gray-800 hover:text-white">
              <i className="text-black text-xs sm:text-sm md:text-lg fas fa-envelope hover:text-white"></i>
              <span className="text-gray-700 hover:text-white text-xs sm:text-sm md:text-lg">
                Email: h9hairsalon@gmail.com
              </span>
            </div>
            {/* Số điện thoại */}
            <div className="flex items-center space-x-4 p-4 bg-gray-100 rounded-lg transition hover:bg-gray-800 hover:text-white">
              <i className="text-black text-xs sm:text-sm md:text-lg fas fa-phone hover:text-white"></i>
              <span className="text-gray-700 text-xs sm:text-sm md:text-lg hover:text-white">
                Hotline: 0933 534 923
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerContact;
