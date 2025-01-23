import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#131313] text-white py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-32 flex flex-col items-center gap-y-12">
        {/* Contact Section */}
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl text-[#FF9142] font-medium mb-4">
            Get in Touch With Us
          </h2>
          <a
            href="mailto:info@aaronn.com"
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 block"
          >
            info@aaronn.com
          </a>
          <div className="w-[15rem] sm:w-[19rem] border-b-2 border-white mx-auto"></div>
        </div>

        {/* Footer Main Content */}
        <div className="flex flex-col md:flex-row justify-around items-center w-full gap-12 md:gap-0">
          {/* Logo Section */}
          <div className="flex flex-col items-center md:items-start">
            <div className="text-xl font-bold flex items-center space-x-1 relative">
              <span className="text-2xl sm:text-3xl absolute -left-14 z-10">
                AAR
              </span>
              <span className="relative flex items-center justify-center w-10 h-10">
                {/* Outer white circle */}
                <div className="absolute w-12 h-12 bg-gray-600 rounded-full"></div>
                {/* Middle gray circle */}
                <div className="absolute w-8 h-8 border-4 border-[#ffffff] rounded-full"></div>
                {/* Inner black circle */}
                <div className="absolute w-3 h-3 bg-[#1A1A1A] rounded-full"></div>
              </span>
              <span className="text-2xl sm:text-3xl z-10 absolute left-10">
                NN
              </span>
            </div>
          </div>

          {/* Address Section */}
          <div className="text-center md:text-left">
            <p className="text-lg sm:text-xl">Street Avenue 21, CA</p>
            <div className="flex flex-col space-y-1">
              <p className="text-lg sm:text-xl">o-8-00-888-</p>
              <p className="text-lg sm:text-xl">ooo</p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center md:text-left">
            <p className="text-lg sm:text-xl">+9 0283353</p>
            <div className="flex justify-center md:justify-start text-2xl mt-4 space-x-4">
              <a
                href="#"
                className="text-[#c4c4c4] hover:text-[#FF9142] transition"
              >
                <FaFacebookF size={24} />
              </a>
              <a
                href="#"
                className="text-[#c4c4c4] hover:text-[#FF9142] transition"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="#"
                className="text-[#c4c4c4] hover:text-[#FF9142] transition"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-[#949494] pt-4 w-full text-center">
          <p className="text-lg sm:text-xl text-white">
            © 2023. Ideapeel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
