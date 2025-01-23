import Image from "next/image";
import React from "react";
import Comma from "../assets/imgs/comma.png";

const Testimonial = () => {
  return (
    <div className="relative min-h-screen bg-[#1A1A1A] text-white flex items-center justify-center px-6 md:px-16 lg:px-32 py-12">
      <div className="max-w-5xl relative">
        {/* Heading */}
        <div className="text-center mb-16 flex">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Testimonial
          </h2>
          <div className="absolute -top-10 sm:-top-14 md:-top-16 right-0 sm:right-10 lg:right-16 text-[#FF9142]">
            <Image
              src={Comma}
              width={100}
              height={100}
              alt="comma-img"
              className="sm:w-28 sm:h-28 lg:w-40 lg:h-40"
            />
          </div>
        </div>

        {/* Testimonial Content */}
        <div className="bg-[#1A1A1A] text-[#949494] text-base sm:text-lg leading-relaxed mt-10 sm:mt-16">
          <p className="italic text-center sm:text-left">
            “Aaronn was fantastic to work with from start to finish. We were
            looking for a simple, stand-out logo and he delivered. I tried
            designing the logo myself thinking I wouldn’t need to pay the money
            for a professional graphic designer but I was very wrong. Working
            with Aaronn was worth every penny and was surprisingly affordable! I
            remember him saying simplicity is key to a successful logo and boy he
            was right. I can’t thank Aaronn enough for his effort and
            professionalism. I would recommend him to anyone looking for a
            design!”
          </p>
          <p className="mt-10 text-center sm:text-left text-xl sm:text-2xl font-bold text-white">
            - Martin Lee
          </p>
        </div>
      </div>

      {/* Decorative Vector */}
      <div
        style={{
          borderRadius: "58% 42% 19% 81% / 56% 79% 21% 44%",
        }}
        className="absolute bg-[#ffffff] opacity-[0.10] w-40 h-36 sm:w-64 sm:h-56 lg:w-80 lg:h-72 top-10 left-4 sm:top-20 sm:left-10 lg:top-28 lg:left-16 blur-[30px] sm:blur-[40px] lg:blur-[50px] shadow-3xl transform -rotate-[189deg] bg-gradient-to-tl from-transparent via-white to-transparent"
      ></div>
    </div>
  );
};

export default Testimonial;
