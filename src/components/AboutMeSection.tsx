import React from "react";
import Image from "next/image";
import AbouteSectionImage from "../assets/imgs/aboutsectionimage.png";

const AboutMeSection: React.FC = () => {
  return (
    <div className="relative flex flex-col lg:flex-row justify-center lg:space-x-16 xl:space-x-32 items-center w-full bg-[#1a1a1a] px-6 py-12 md:py-16 lg:px-12 lg:py-24">
      {/* Text Section */}
      <div className="text-left text-white space-y-6 max-w-lg mb-12 lg:mb-0 lg:pl-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug md:leading-snug lg:leading-tight">
          Let’s get to know <br /> about me closer
        </h1>
        <p className="text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
          Aaronn is a New York-based visual designer focusing on branding and
          visual identity. Her portfolio showcases her wide range of work,
          spanning books, posters, and web design.
        </p>
        <button className="bg-[#ff9142] w-full sm:w-52 md:w-60 lg:w-72 h-10 sm:h-12 md:h-14 text-white py-2 px-6 rounded-[47px] text-sm sm:text-[15px] md:text-[16px] lg:text-[18px] font-medium transition duration-300 hover:opacity-90">
          Discover More About Me
        </button>
      </div>

      {/* Content Wrapper */}
      <div className="flex items-center justify-center lg:justify-end max-w-6xl">
        {/* Image Section */}
        <div className="relative lg:mt-0 lg:ml-12 xl:ml-24">
          <div className="w-56 h-72 sm:w-64 sm:h-80 md:w-72 md:h-96 lg:w-80 lg:h-96 overflow-hidden rounded-xl shadow-lg">
            <Image
              src={AbouteSectionImage}
              alt="about-img"
              width={320}
              height={400}
              className="w-full h-full object-cover"
              priority
            />
          </div>

          {/* Decorative Borders */}
          <div className="absolute border-2 border-[#ff9142] rounded-[30px] w-6 h-16 sm:w-8 sm:h-24 md:w-10 md:h-32 top-44 sm:top-48 md:top-56 left-[-12px] sm:left-[-16px] md:left-[-24px]"></div>
          <div className="absolute border-2 border-[#ff9142] rounded-[30px] w-4 h-12 sm:w-6 sm:h-16 md:w-8 md:h-24 -top-6 sm:-top-8 md:-top-12 right-[12px] sm:right-[18px] md:right-[24px] transform rotate-90"></div>
        </div>
      </div>

      {/* Background Vector */}
      <div
        style={{
          borderRadius: "58% 42% 19% 81% / 56% 79% 21% 44%",
        }}
        className="absolute bg-[#ffffff] opacity-[0.10] w-48 h-40 sm:w-56 sm:h-48 md:w-64 md:h-56 lg:w-80 lg:h-72 -top-8 sm:-top-10 md:-top-14 left-[-12px] sm:-left-8 md:-left-10 blur-[25px] sm:blur-[30px] md:blur-[40px] shadow-3xl transform -rotate-[189deg] bg-gradient-to-tl from-transparent via-white to-transparent"
      ></div>
    </div>
  );
};

export default AboutMeSection;
