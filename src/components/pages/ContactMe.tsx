import Image from "next/image";
import React from "react";
import ContactMeImg from "../../assets/imgs/contactmelaptopimg.jpg";

const ContactMe = () => {
  return (
    <section className="min-h-screen max-w-7xl mx-auto text-white flex flex-col items-center py-16 relative">
      {/* Header */}
      <div className="w-full px-4 py-12">
        <div className="pl-4 sm:pl-[7rem] flex flex-col gap-y-8">
          <div className="flex flex-col gap-y-2">
            <h1 className="text-[30px] sm:text-[48px] md:text-[72px] font-bold text-start mb-4">
              Contact Me
            </h1>
            <p className="text-start text-base sm:text-lg text-gray-400 mb-8">
              For Any Project Reach Us
            </p>
          </div>

          <div className="w-full sm:w-[63.7rem] border border-b border-[#949494] mb-8"></div>
        </div>
      </div>

      {/* Form Section */}
      <div className="px-6 sm:px-16 md:px-32 flex flex-col sm:flex-row gap-8 items-start justify-center">
        {/* Text Section */}
        <div className="flex-1 text-center md:text-left mb-8 md:mb-0">
          <h2 className="text-[30px] sm:text-[48px] md:text-[64px] font-bold mb-4">
            Get in
          </h2>
          <h2 className="text-[30px] sm:text-[48px] md:text-[64px] font-bold mb-4">
            Touch With
          </h2>
          <h2 className="text-[30px] sm:text-[48px] md:text-[64px] font-bold mb-4">
            Us
          </h2>
        </div>

        {/* Form */}
        <div className="flex-1 space-y-6">
          <input
            type="text"
            placeholder="NAME"
            className="w-full py-3 bg-transparent border-b-2 border-gray-600 text-white focus:outline-none focus:border-orange-500 transition duration-300"
          />
          <input
            type="text"
            placeholder="SUBJECT"
            className="w-full py-3 bg-transparent border-b-2 border-gray-600 text-white focus:outline-none focus:border-orange-500 transition duration-300"
          />
          <input
            type="text"
            placeholder="MESSAGE"
            className="w-full py-3 bg-transparent border-b-2 border-gray-600 text-white focus:outline-none focus:border-orange-500 transition duration-300"
          />
          <button className="w-[158px] h-[50px] bg-[#ff9142] text-white font-semibold rounded-[50px] transition duration-300">
            SEND
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full max-w-5xl mt-16 flex justify-center">
        <Image
          src={ContactMeImg}
          alt="Laptop"
          className="rounded-lg object-cover w-full max-h-[600px] sm:max-h-[700px]"
        />
      </div>

      {/* Footer */}
      <div className="w-full max-w-5xl mx-auto px-8 mt-8">
        <div className="text-[#949494] flex flex-wrap justify-between items-center text-base sm:text-xl leading-7 text-center gap-4">
          <p className="text-[#949494]">Street Avenue 21, CA</p>
          <p className="text-[#949494]">+49 0285533</p>
          <p className="text-[#949494]">info@aaron.com</p>
        </div>
      </div>

      {/* Vector */}
      <div
        style={{
          borderRadius: "58% 42% 19% 81% / 56% 79% 21% 44%",
        }}
        className="absolute bg-[#ffffff] opacity-[0.10] w-72 sm:w-[300px] h-64 sm:h-[350px] -top-2 left-16 blur-[40px] shadow-3xl transform -rotate-[189deg] bg-gradient-to-tl from-transparent via-white to-transparent"
      ></div>
    </section>
  );
};

export default ContactMe;
