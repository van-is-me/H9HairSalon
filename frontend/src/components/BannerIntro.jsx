import React from "react";
import Anhhieuung1 from "../assets/Anhhieuung1.jpg";
import Anhhieuung2 from "../assets/Anhhieuung2.jpg";
import Anhhieuung22 from "../assets/Anhhieuung.jpg";
import Anhhieuung222 from "../assets/Anhhieuung3.jpg";
import "../css/BannerIntro.css";

function BannerIntro() {
  return (
    <>
      <div className="flex justify-center items-center bg-slate-100">
        <div className="mobi_intro max-w-screen-2xl container mx-auto flex flex-col md:flex-row">
          <div className="animation w-full md:w-1/2 order-2 md:order-1 relative flex justify-center items-center">
            {/* Tấm ảnh 1 với hiệu ứng di chuyển */}
            <div className="image1">
              <img
                src={Anhhieuung1}
                alt="Anhhieuung1"
                className="rounded-xl shadow-lg"
              />
            </div>

            {/* Tấm ảnh 2 với hiệu ứng di chuyển */}
            <div className="image2">
              <img
                src={Anhhieuung2}
                alt="Anhhieuung2"
                className="rounded-xl shadow-lg"
              />
            </div>

            {/* Tấm ảnh 3 */}
            <div className="image3">
              <img
                src={Anhhieuung22}
                alt="Anhhieuung22"
                className="rounded-xl shadow-lg"
              />
            </div>

            {/* Tấm ảnh 4 */}
            <div className="image4">
              <img
                src={Anhhieuung222}
                alt="Anhhieuung222"
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>

          <div className="order-1 w-full md:w-1/2 flex justify-start items-start text-left min-h-[55vh] md:min-h-[100vh] px-4 sm:px-8 md:px-12">
            {/* Nội dung bên phải */}
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold flex justify-center items-center text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 mb-4 animate-bounce">
                Giới thiệu về H9 HAIR SALON
              </h2>

              <p className="text-xs sm:text-sm md:text-lg text-gray-600 mb-4">
                <span className="font-bold text-black">H9 Hair Salon </span> là
                thương hiệu chuyên cung cấp dịch vụ chăm sóc tóc nữ và làm nails
                cao cấp, mang đến trải nghiệm làm đẹp toàn diện cho phái đẹp.
                Chúng tôi tự hào cung cấp các dịch vụ chất lượng, giúp khách
                hàng tự tin thể hiện phong cách cá nhân với mái tóc và bộ móng
                hoàn hảo.
              </p>
              <p className="text-xs sm:text-sm md:text-lg text-gray-600 mb-4">
                Tọa lạc tại
                <span className="font-bold text-black">
                  {" "}
                  Khu tái định cư Lộc An, xã Bình Sơn, huyện Long Thành, tỉnh
                  Đồng Nai.
                </span>
              </p>
              <p className="text-xs sm:text-sm md:text-lg text-gray-600 mb-4">
                <span className="font-bold text-black">H9 Hair Salon</span> là
                điểm đến lý tưởng cho những ai mong muốn nâng tầm vẻ đẹp của
                mình. Với không gian hiện đại, sang trọng và đội ngũ chuyên viên
                lành nghề, chúng tôi cam kết mang đến những trải nghiệm làm đẹp
                chuyên nghiệp từ cắt, nhuộm, tạo kiểu tóc đến chăm sóc móng tay,
                móng chân.
              </p>
              <p className="text-xs sm:text-sm md:text-lg text-gray-600 mb-4">
                Đến với{" "}
                <span className="font-bold text-black">H9 Hair Salon</span>, bạn
                không chỉ được chăm sóc vẻ ngoài mà còn được thư giãn trong một
                không gian ấm cúng và đẳng cấp. Chúng tôi luôn nỗ lực để trở
                thành người bạn đồng hành đáng tin cậy trên hành trình hoàn
                thiện vẻ đẹp của bạn.
              </p>
              <div className="w-full flex justify-center">
                <button className="bg-black text-white py-1 px-2 md:py-2 md:px-4 rounded-md md:rounded-lg hover:bg-orange-500 hover:text-black transition">
                  <span className="text-xs sm:text-sm md:text-lg">
                    {" "}
                    Tìm hiểu về chúng tôi
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BannerIntro;
