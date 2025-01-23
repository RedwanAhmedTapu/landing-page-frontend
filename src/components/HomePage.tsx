import React from "react";
import { FiArrowRight } from "react-icons/fi";

const HomePage: React.FC = () => {
  return (
    <main className="bg-[#1A1A1A] text-white relative h-96 sm:h-auto">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center relative px-6 md:px-12">
        {/* Hero Text */}
        <h1 className="font-syne font-bold text-4xl sm:text-5xl md:text-6xl  xl:text-7xl leading-snug sm:leading-snug md:leading-tight lg:leading-[4.5rem] xl:leading-[86.4px] text-center max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%] absolute top-20 sm:top-28 md:top-32 lg:top-36">
          Adaptive Logo Design <br /> for Your Brand
        </h1>

        {/* Explore Works Button */}
        <button className="bg-[#FF9142] text-[#F4F7FA] flex justify-center items-center space-x-2 font-semibold rounded-full shadow-custom w-48 sm:w-56 md:w-60 h-12 sm:h-14 md:h-16 mt-2 sm:mt-72 lg:mt-72">
          <span className="text-sm sm:text-base md:text-lg">EXPLORE WORKS</span>
          <FiArrowRight className="text-lg sm:text-xl font-bold" />
        </button>

        {/* Decorative Vector */}
        <div
          style={{
            borderRadius: "58% 42% 19% 81% / 56% 79% 21% 44%",
          }}
          className="absolute bg-[#ffffff] opacity-[0.10] w-60 h-56 sm:w-72 sm:h-64 md:w-80 md:h-72 top-10 sm:top-8 lg:top-4 right-8 sm:right-36 md:right-72 lg:right-96 blur-[30px] md:blur-[40px] shadow-3xl transform -rotate-[189deg] bg-gradient-to-tl from-transparent via-white to-transparent"
        ></div>
      </section>
    </main>
  );
};

export default HomePage;
