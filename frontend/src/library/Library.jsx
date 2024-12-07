import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../css/Library.css";
import thuvien1 from "../assets/tv1.jpg";
import thuvien2 from "../assets/tv2.jpg";
import thuvien3 from "../assets/tv3.jpg";
import thuvien4 from "../assets/tv4.jpg";
import thuvien5 from "../assets/tv5.jpg";
import thuvien6 from "../assets/tv6.jpg";
import thuvien7 from "../assets/tv7.jpg";
import thuvien8 from "../assets/tv8.jpg";
import thuvien9 from "../assets/tv9.jpg";
import thuvien10 from "../assets/tv10.jpg";

function Library() {
  const images = [
    thuvien1,
    thuvien2,
    thuvien3,
    thuvien4,
    thuvien5,
    thuvien6,
    thuvien7,
    thuvien8,
    thuvien9,
    thuvien10,
  ];

  return (
    <>
      <Navbar />
      <div className="px-4 md:px-10 lg:px-16 py-6">
        <h1 className="text-2xl md:text-3xl font-semibold text-center mt-16 sm:mt-20 animate-pulse">
          Thư viện
        </h1>

        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Thư viện ${index + 1}`}
              className="w-full aspect-square object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Library;
