import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"; // Import useLocation
import logo from "../assets/Logo.webp";

function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  const location = useLocation(); // Get the current route

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { path: "/", label: "Trang chủ" },
    { path: "/introduce", label: "Giới thiệu" },
    ///{ path: "/product", label: "Sản phẩm" },
    { path: "/service", label: "Dịch vụ" },
    { path: "/train", label: "Đào tạo" },
    { path: "/library", label: "Thư viện" },
    { path: "/contact", label: "Liên hệ" },
  ];

  const navLinks = navItems.map((item) => (
    <li
      key={item.path}
      className={`px-6 py-3 text-sm min-w-[120px] ${
        location.pathname === item.path ? "text-orange-500" : "text-white"
      }`}
    >
      <a
        href={item.path}
        className={`hover:text-orange-500 ${
          location.pathname === item.path ? "font-bold" : ""
        }`}
      >
        {item.label}
      </a>
    </li>
  ));

  return (
    <>
      <div
        className={`w-full dark:bg-slate-900 dark:text-white fixed top-0 left-0 right-0 z-50
          ${
            sticky
              ? "sticky-navbar shadow-md bg-base-200 dark:bg-slate-700 dark:text-white duration-300 transition-all ease-in-out"
              : ""
          }`}
      >
        <div className="navbar bg-black text-white h-16 md:h-20">
          {/* Navbar Start */}
          <div className="navbar-start lg:w-2/5 flex justify-between items-center w-full relative">
            {/* Menu Button for mobile */}
            <div className="dropdown lg:hidden absolute left-0">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
            </div>

            {/* Logo Centered */}
            <a className="btn btn-ghost text-xl flex justify-center items-center mx-auto">
              <img
                src={logo}
                alt="Logo"
                className="h-12 w-auto max-w-full object-contain filter invert mx-auto"
              />
            </a>
          </div>

          {/* Navbar Center (Visible only on large screens) */}
          <div className="navbar-center hidden lg:flex flex-1 justify-center">
            <ul className="flex space-x-8">{navLinks}</ul>
          </div>

          {/* Navbar End */}
          <div className="navbar-end flex lg:w-2/5 justify-center items-start space-x-4 relative hidden md:flex">
            {!isSearchOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white cursor-pointer hover:text-orange-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                onClick={() => setIsSearchOpen(true)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11 4a7 7 0 1 1 0 14 7 7 0 0 1 0-14zM21 21l-4.35-4.35"
                />
              </svg>
            ) : (
              <div className="absolute top-0 right-0 w-full p-2 z-[100]">
                <input
                  type="text"
                  className="w-full p-3 text-black bg-white border border-gray-600 rounded-lg focus:w-[300px] transition-all duration-300"
                  placeholder="Nhập để tìm kiếm..."
                  autoFocus
                  onBlur={() => setIsSearchOpen(false)}
                />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50">
          <div className="flex justify-end p-4">
            <button
              className="text-white text-2xl"
              onClick={() => setIsMenuOpen(false)}
            >
              ×
            </button>
          </div>
          <ul className="z-100 flex flex-col items-center space-y-6 text-white text-lg">
            {navLinks}
          </ul>
        </div>
      )}
    </>
  );
}

export default Navbar;
