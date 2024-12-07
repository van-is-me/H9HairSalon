import React, { useState } from "react";
import "../css/BannerTrain.css"; // Đảm bảo đường dẫn đúng
import Video from "../assets/video.mp4"; // Đảm bảo tệp video có sẵn trong đường dẫn

function BannerTrain() {
  const [isPlaying, setIsPlaying] = useState(false); // Trạng thái video đang phát hay không

  // Xử lý sự kiện khi người dùng click vào video để bắt đầu phát
  const handleVideoClick = () => {
    setIsPlaying(true);
  };

  return (
    <div className="flex justify-center items-center bg-slate-100">
      <div className="train max-w-screen-2xl container my-6 md:my-10 mx-auto flex flex-col p-0 md:p-6 justify-center ">
        {/* Tiêu đề chung cho cả hai phần */}
        <div className="title-container text-center mb-0 md:mb-6">
          <h2 className="text-2xl md:text-3xl font-semibold flex justify-center items-center text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500 mb-0 md:mb-4 animate-none">
            Chương trình đào tạo học viên tại H9 Hair Salon
          </h2>
        </div>

        <div className="flex flex-col md:flex-row md">
          {/* Section 1: Nội dung bên trái */}
          <div className="w-full md:w-1/2 order-2 md:order-1 relative flex justify-center items-center md:p-6 p-3">
            <div className="text-left text-gray-800">
              <p className="text-xs sm:text-sm md:text-lg leading-relaxed">
                Tại <span className="font-bold text-black">H9 Hair Salon </span>
                , chúng tôi không chỉ nổi tiếng với các dịch vụ chăm sóc tóc
                chuyên nghiệp mà còn là địa chỉ uy tín trong việc đào tạo học
                viên trong ngành làm tóc. Chương trình đào tạo của chúng tôi
                được thiết kế nhằm cung cấp cho học viên những kỹ năng cần thiết
                để trở thành các chuyên gia tạo mẫu tóc sáng tạo và chuyên
                nghiệp.
              </p>
            </div>
          </div>

          {/* Section 2: Video trực tiếp */}
          <div className="order-1 w-full md:w-1/2 flex justify-center items-center text-center md:text-left md:p-6 p-3">
            <div className="w-full max-w-3xl video-wrapper">
              <div
                className="video-container"
                onClick={handleVideoClick} // Khi click sẽ phát video
              >
                {isPlaying ? (
                  <video
                    controls
                    autoPlay
                    loop
                    muted={false}
                    className="w-full h-full"
                  >
                    <source src={Video} type="video/mp4" />
                    Trình duyệt của bạn không hỗ trợ thẻ video.
                  </video>
                ) : (
                  <div className="w-full h-full bg-black flex justify-center items-center text-white">
                    <span>Click vào video để xem</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerTrain;
