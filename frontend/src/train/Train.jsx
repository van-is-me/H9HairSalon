import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../css/Train.css";
import Train1 from "../assets/train1.jpg";
import Train2 from "../assets/train2.jpg";
import Train3 from "../assets/train3.jpg";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

function Train() {
  return (
    <>
      <Navbar />
      <div className="px-4 py-6">
        {/* Title */}

        <div className="max-w-4xl mx-auto text-left text-lg text-gray-700">
          <h1 className="text-2xl md:text-3xl font-semibold text-center mt-16 sm:mt-20 animate-zoomInColorChange">
            Giới thiệu về mảng đào tạo của H9 HAIR NAILS
          </h1>
          <p className="text-sm font-semibold text-gray-500 text-right">
            Ngày đăng: 07/12/2024
          </p>

          {/* Main Content */}
          <p className="mb-6 text-xs sm:text-sm md:text-lg">
            Với mục tiêu trở thành trung tâm đào tạo nghề làm tóc và nails hàng
            đầu tại Việt Nam,{" "}
            <span className="font-bold text-black">H9 Hair Salon </span> luôn
            chú trọng vào việc nâng cao chất lượng đào tạo để trang bị cho học
            viên những kỹ năng chuyên nghiệp nhất.
          </p>

          <p className="text-orange-500 text-xl md:text-2xl font-semibold mb-4">
            Đội Ngũ Giảng Viên Tay Nghề Cao
          </p>
          <p className="mb-6 text-xs sm:text-sm md:text-lg">
            Đội ngũ giảng viên tại{" "}
            <span className="font-bold text-black">H9 Hair Salon </span> là
            những chuyên gia hàng đầu trong lĩnh vực làm tóc và nails, với nhiều
            năm kinh nghiệm và kỹ năng vượt trội.
          </p>

          <p className="text-green-500 text-xl md:text-2xl font-semibold mb-4">
            Chương Trình Đào Tạo Bài Bản
          </p>
          <p className="mb-6 text-xs sm:text-sm md:text-lg">
            Chương trình đào tạo tại{" "}
            <span className="font-bold text-black">H9 Hair Salon </span> được
            thiết kế bài bản, bao gồm các khóa học cơ bản và nâng cao về làm tóc
            nữ như cắt tóc, uốn tóc, nhuộm tóc, tạo kiểu hiện đại.
          </p>

          <p className="text-yellow-500 text-xl md:text-2xl font-semibold mb-4">
            Cam Kết Chất Lượng Đào Tạo
          </p>
          <p className="mb-6 text-xs sm:text-sm md:text-lg">
            <span className="font-bold text-black">H9 Hair Salon </span> cam kết
            mang đến chất lượng đào tạo vượt trội, giúp học viên trở thành những
            nhà tạo mẫu tóc và chuyên gia làm nails chuyên nghiệp.
          </p>

          {/* Image Section */}
          {/* Image Section */}
          <div className="my-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <img
              src={Train1}
              alt="Training 1"
              className="rounded-lg shadow-md w-full aspect-[5/7] object-cover"
            />
            <img
              src={Train2}
              alt="Training 2"
              className="rounded-lg shadow-md w-full aspect-[5/7] object-cover"
            />
            <img
              src={Train3}
              alt="Training 3"
              className="rounded-lg shadow-md w-full aspect-[5/7] object-cover"
            />
          </div>

          {/* Share Section */}
          <div className="mt-12 text-center">
            <p className="text-2xl md:text-3xl font-semibold mb-4">
              Chia sẻ ngay tại:
            </p>
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

export default Train;
