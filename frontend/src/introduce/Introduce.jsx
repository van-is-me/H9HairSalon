import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../css/Introduce.css";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa"; // Importing social media icons

function Introduce() {
  return (
    <>
      <Navbar />
      <div className="px-4 py-6">
        {/* Title */}

        {/* Content */}
        <div className="max-w-4xl mx-auto text-left text-lg text-gray-700">
          <h1 className="text-2xl md:text-3xl font-semibold text-center mt-16 sm:mt-20 animate-fadeInScaleColor">
            H9 HAIR SALON
          </h1>

          <p className="mb-6 text-xs sm:text-sm md:text-lg">
            Nằm tại khu vực Tái định cư Lộc An, Long Thành, Đồng Nai, H9 Hair
            Salon là điểm đến lý tưởng cho những ai tìm kiếm sự thay đổi phong
            cách và chăm sóc sắc đẹp. Chúng tôi mang đến không gian thư giãn,
            sang trọng với các dịch vụ chuyên nghiệp giúp bạn trở nên xinh đẹp
            và tự tin hơn mỗi ngày.
          </p>
          <p className="mb-6 text-xs sm:text-sm md:text-lg">
            Chúng tôi chuyên cung cấp các dịch vụ cắt tóc, thiết kế kiểu tóc nữ
            phù hợp với từng khuôn mặt và phong cách sống của bạn. Đội ngũ
            stylist giàu kinh nghiệm sẽ tư vấn và tạo nên những kiểu tóc đẹp,
            phù hợp xu hướng, từ tóc ngắn năng động đến những mái tóc dài quyến
            rũ. Tất cả đều được thực hiện với kỹ thuật tỉ mỉ, đảm bảo bạn luôn
            hài lòng với kết quả.
          </p>
          <p className="mb-6 text-xs sm:text-sm md:text-lg">
            Ngoài cắt tóc, H9 Hair Salon còn cung cấp dịch vụ làm nails chuyên
            nghiệp, giúp bạn có bộ móng đẹp hoàn hảo, từ các kiểu nail đơn giản
            đến các thiết kế nghệ thuật tinh tế. Với chất liệu an toàn và đội
            ngũ kỹ thuật viên tay nghề cao, chúng tôi cam kết mang đến cho bạn
            sự hài lòng tuyệt đối.
          </p>
          <p className="mb-6 text-xs sm:text-sm md:text-lg">
            Hãy đến <span className="font-bold text-black">H9 Hair Salon </span>{" "}
            và khám phá sự khác biệt trong chăm sóc sắc đẹp dành cho phái nữ.
            Chúng tôi tự hào mang đến một trải nghiệm thư giãn, làm mới vẻ ngoài
            và giúp bạn luôn tỏa sáng. Liên hệ ngay để đặt lịch hẹn tại địa chỉ
            Tái định cư Lộc An, Long Thành, Đồng Nai.
          </p>

          {/* Share Section */}
          <div className="mt-12 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Chia sẻ ngay tại:
            </h2>
            <div className="flex justify-center space-x-6">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="text-blue-600 text-3xl hover:text-blue-800 transition" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-pink-500 text-3xl hover:text-pink-700 transition" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="text-blue-400 text-3xl hover:text-blue-600 transition" />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-blue-700 text-3xl hover:text-blue-900 transition" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Introduce;
