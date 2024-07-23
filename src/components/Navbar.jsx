import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import sharpLogo from "../assets/sharp_logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const getFontColor = () => {
    return location.pathname === "/" ? "black" : "white";
  };

  const linkStyle = {
    color: getFontColor(),
    fontFamily: "Poppins",
    fontSize: "1rem",
  };

  return (
    <nav className="w-full md:bg-transparent bg-white shadow-md p-4 z-50 h-auto ">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img src={sharpLogo} alt="Sharp Logo" className="h-8 mr-2" />
        </div>
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="hover:text-gray-900" style={linkStyle}>
            Home
          </Link>
          <Link
            to="/about-donwudi-investments"
            className="hover:text-gray-900"
            style={linkStyle}
          >
            About Donwudi Investments
          </Link>
        </div>
        <div className="bg-yellow-500 hidden text-white rounded-md md:block">
          <button className="px-4 py-2 rounded-md">Get the App</button>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-600 hover:text-gray-900 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden  h-auto">
          <Link
            to="/"
            className="block px-4 py-2 text-gray-600 hover:text-gray-900"
            style={{ fontFamily: "Poppins", fontSize: "1rem" }}
          >
            Home
          </Link>
          <Link
            to="/about-donwudi-investments"
            className="block px-4 py-2 text-gray-600 hover:text-gray-900"
            style={{ fontFamily: "Poppins", fontSize: "1rem" }}
          >
            Investments About Donwudi
          </Link>

          <button
            className="block w-full text-left px-4 py-2 bg-yellow-500 text-white"
            style={{ fontFamily: "Poppins", fontSize: "1rem" }}
          >
            Get the App
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
