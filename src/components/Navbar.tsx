
"use client"
import React, { useState } from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="bg-[#1A1A1A] text-white px-16 sm:px-6 py-4 lg:px-28 flex justify-between sm:justify-around items-center relative">
      {/* Brand Logo */}
      <div className="text-sm md:text-xl font-bold flex items-center space-x-1 relative">
        <span className="text-2xl md:text-3xl absolute -left-8 md:-left-14 z-10">
          AAR
        </span>
        <span className="relative flex items-center justify-center w-8 h-8 md:w-10 md:h-10">
          {/* Outer white circle */}
          <div className="absolute w-10 h-10 md:w-12 md:h-12 bg-gray-600 rounded-full"></div>
          {/* Middle gray circle */}
          <div className="absolute w-6 h-6 md:w-8 md:h-8 border-4 border-[#ffffff] rounded-full"></div>
          {/* Inner black circle */}
          <div className="absolute w-2 h-2 md:w-3 md:h-3 bg-[#1A1A1A] rounded-full"></div>
        </span>
        <span className="text-2xl md:text-3xl z-10 absolute left-8 md:left-10">
          NN
        </span>
      </div>

      {/* Desktop Navigation Links */}
      <ul className="hidden md:flex items-center space-x-6 lg:space-x-12">
        <li className="text-[14px] font-rubik font-medium text-left leading-4 transition text-white opacity-80 hover:opacity-100">
          <Link href="/">HOME</Link>
        </li>
        <li className="text-[14px] font-rubik font-medium text-left leading-4 transition text-white opacity-80 hover:opacity-100">
          <Link href="/about-me">ABOUT ME</Link>
        </li>
        <li className="text-[14px] font-rubik font-medium text-left leading-4 transition text-white opacity-80 hover:opacity-100">
          <Link href="/my-works">MY WORKS</Link>
        </li>
        <li className="text-[14px] w-32 h-12 flex justify-center items-center font-rubik font-medium border-2 border-white border-opacity-50 px-4 py-2 rounded-full leading-4 transition bg-[#030304] bg-opacity-50 text-white hover:opacity-100">
          <Link href="/contact-me">CONTACT</Link>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <div className="flex md:hidden z-20">
        <button
          onClick={toggleMenu}
          className="text-white focus:outline-none"
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Background Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-10 transition-opacity ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu}
      ></div>

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed top-0 right-0 w-64 bg-[#1A1A1A] h-full z-20 shadow-lg transform transition-transform duration-500 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col items-start p-6 space-y-6">
          <li className="text-[14px] font-rubik font-medium text-white opacity-80 hover:opacity-100 transition">
            <Link href="/">HOME</Link>
          </li>
          <li className="text-[14px] font-rubik font-medium text-white opacity-80 hover:opacity-100 transition">
            <Link href="/about-me">ABOUT ME</Link>
          </li>
          <li className="text-[14px] font-rubik font-medium text-white opacity-80 hover:opacity-100 transition">
            <Link href="/my-works">MY WORKS</Link>
          </li>
          <li className="text-[14px] font-rubik font-medium border-2 border-white border-opacity-50 px-4 py-2 rounded-full bg-[#030304] bg-opacity-50 text-white hover:opacity-100 transition">
            <Link href="/contact-me">CONTACT</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
