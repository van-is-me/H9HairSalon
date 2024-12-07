import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../css/Contact.css";

function Contact() {
  return (
    <>
      <Navbar />
      <div className="px-4 py-6 md:px-12 md:py-28 mt-16 md:mt-16">
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-2xl shadow-2xl">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4 text-center">
            Liên Hệ Với Chúng Tôi
          </h2>

          <form action="#" method="POST">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {/* Full Name */}
              <div>
                <label
                  htmlFor="fullname"
                  className="block text-gray-700 text-xs sm:text-sm md:text-lg font-semibold mb-2"
                >
                  Họ Tên
                </label>
                <input
                  type="text"
                  id="fullname"
                  name="fullname"
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Nhập họ tên"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-gray-700 text-xs sm:text-sm md:text-lg font-semibold mb-2"
                >
                  Số Điện Thoại
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Nhập số điện thoại"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {/* Address */}
              <div>
                <label
                  htmlFor="address"
                  className="block text-gray-700 text-xs sm:text-sm md:text-lg font-semibold mb-2"
                >
                  Địa Chỉ
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Nhập địa chỉ"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-xs sm:text-sm md:text-lg font-semibold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Nhập email"
                />
              </div>
            </div>

            {/* Subject */}
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="block text-gray-700 text-xs sm:text-sm md:text-lg font-semibold mb-2"
              >
                Chủ Đề
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Nhập chủ đề"
              />
            </div>

            {/* Message */}
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-gray-700 text-xs sm:text-sm md:text-lg font-semibold mb-2"
              >
                Nội Dung
              </label>
              <textarea
                id="message"
                name="message"
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                rows="6"
                placeholder="Nhập nội dung tin nhắn"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-black text-white py-3 px-8 rounded-lg hover:bg-orange-500 transition"
              >
                Gửi Thông Tin
              </button>
            </div>
          </form>
        </div>

        {/* Location Section */}
        <div className="mt-12">
          <h3 className="text-xl font-semibold text-center text-gray-800 mb-4">
            Vị Trí Cửa Hàng
          </h3>

          {/* Google Map Embed */}
          <div className="w-full md:w-3/4 mx-auto h-64 md:h-96 mb-2 md:mb-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1959.5459443724446!2d106.99953092267897!3d10.80427402678403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31751f8977b84a2d%3A0xcf8147c10ae4dfd4!2sH9%20hair%20salon!5e0!3m2!1sen!2sus!4v1733539711171!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>

          <div className="text-center mt-0 md:mt-4 text-gray-700">
            <p>Địa chỉ: Khu tái định cư Lộc An, Long Thành, Đồng Nai</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
