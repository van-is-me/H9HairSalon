import React from "react";
import logo from "../assets/Logo.webp";
import { FacebookProvider, Page } from "react-facebook"; // Đảm bảo rằng bạn đã có đường dẫn chính xác đến logo

function Footer() {
  return (
    <footer className="bg-black text-white py-5 md:py-10 min-h-[500px] md:min-h-[400px]">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 text-center md:text-left !h-[70%] ">
        {/* Cột 1: Thông tin công ty */}
        <div className="space-y-1 md:space-y-4">
          <img
            src={logo}
            alt="Logo"
            className="w-32 h-auto filter invert mx-auto md:mx-0" // Căn logo về giữa trên mobile và trái trên PC
          />
          <p className="text-xs sm:text-sm md:text-lg text-gray-400">
            Địa chỉ: Tái định cư Lộc An, Long Thành, Đồng Nai
          </p>
          <p className="text-xs sm:text-sm md:text-lg text-gray-400">
            Email: h9hairsalon@gmail.com
          </p>
          <p className="text-xs sm:text-sm md:text-lg text-gray-400">
            Hotline: 0933 534 923
          </p>
          <p className="text-xs sm:text-sm md:text-lg text-gray-400">
            Website:{" "}
            <a
              href="http://h9hairsalon.com.vn"
              className="text-orange-500 hover:underline"
            >
              h9hairsalon.com.vn
            </a>
          </p>
          <p className="text-xs sm:text-sm md:text-lg text-gray-400">
            &copy; 2024. H9 HAIR SALON
          </p>
        </div>

        {/* Cột 2: Hỗ trợ khách hàng */}
        <div className="space-y-1 md:space-y-4">
          <h4 className="text-2xl md:text-3xl font-semibold text-center md:text-left">
            Hỗ trợ khách hàng
          </h4>
          <hr className="border-t-2 border-gray-400 my-4" />{" "}
          {/* Đường ngang dưới title */}
          <ul className="text-xs sm:text-sm md:text-lg text-gray-400">
            <li>Hỗ trợ đặt hàng</li>
            <li>Chính sách cửa hàng</li>
            <li>Chính sách bảo hành</li>
          </ul>
        </div>

        {/* Cột 3: Mã QR liên kết */}
        <div className="space-y-1 md:space-y-4">
          <h4 className="text-2xl md:text-3xl font-semibold text-center md:text-left">
            Mã QR liên kết
          </h4>
          <hr className="border-t-2 border-gray-400 my-4" />{" "}
          {/* Đường ngang dưới title */}
          <p className="text-xs sm:text-sm md:text-lg text-gray-400">
            Quét mã để nhận thông tin sớm nhất
          </p>
          <div className="w-32 h-32 bg-gray-200 mx-auto rounded-lg"></div>{" "}
          {/* QR code căn giữa */}
        </div>

        {/* Cột 4: Fanpage */}
        {/* Cột 4: Fanpage */}
        <div className="space-y-1 md:space-y-4">
          <h4 className="text-2xl md:text-3xl font-semibold text-center md:text-left">
            Fanpage
          </h4>
          <hr className="border-t-2 border-gray-400 my-4" />{" "}
          {/* Đường ngang dưới title */}
          <div className="h-auto bg-gray-200 mx-auto rounded-lg p-4 w-[85%] sm:full">
            <FacebookProvider appId="your-app-id" className="items-center">
              <Page href="https://www.facebook.com/profile.php?id=100068184334352&ref=embed_page" />
            </FacebookProvider>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
