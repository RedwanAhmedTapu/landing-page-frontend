import React from "react";
import Image from "next/image";
import BrandgroupingImage from "../assets/imgs/brandgroupingimg.jpg";
import BrandjourneyImage from "../assets/imgs/brandjourneyimg.jpg";
import BrandSuggestionimg from "../assets/imgs/brandsuggestionimg.jpg";
import Nftlimpsingimg from "../assets/imgs/nftglimpsimg.jpg";

const ProjectsHighlight = () => {
  return (
    <div className="relative min-h-screen max-w-7xl mx-auto bg-[#1A1A1A] text-white px-6 md:px-16 lg:px-32 py-12 mt-44">
      <div className="text-center flex flex-col justify-center items-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          My Projects Highlight
        </h1>
        <button className="mt-4 px-6 w-52 py-3 bg-transparent border border-[#FF9142] text-[#F4F7FA] text-[13px] rounded-[30px] shadow-md hover:scale-105 transition-transform flex justify-center items-center gap-2">
          EXPLORE MORE
          <span className="text-lg">→</span>
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-900  rounded-lg overflow-hidden shadow-lg  transition-transform"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={400}
              height={300}
              className="w-full h-[30rem] object-cover"
            />
            <div className="p-6">
              <div className="flex  items-center space-x-2">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <div className="w-10  h-[0.7px] mb-2 bg-[#ff9142]"></div>
              </div>
              <div className="text-sm text-gray-400 space-y-1">
                <p className="flex  items-center space-x-4 ">
                  <span className="font-semibold text-white">Client:</span>{" "}
                  <span>{project.client}</span>
                </p>
                <p className="flex items-center space-x-4">
                  <span className="font-semibold text-white">Work:</span>{" "}
                  <span>{project.work}</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
       {/* Vector */}
       <div
         style={{
            borderRadius: "58% 42% 19% 81% / 56% 79% 21% 44% ",
          }}
          className="absolute bg-[#ffffff] opacity-[0.10]  w-80 h-72  -top-10 right-72 blur-[40px] shadow-3xl transform -rotate-[189deg] 
  bg-gradient-to-tl from-transparent via-white to-transparent"
        ></div>
    </div>
  );
};

const projects = [
  {
    title: "Brand Journey Improvements",
    client: "Digital",
    work: "Logo design",
    image: BrandjourneyImage,
  },
  {
    title: "Brand Grouping",
    client: "IT",
    work: "Logo design",
    image: BrandgroupingImage,
  },
  {
    title: "NFT Glimps",
    client: "Generative",
    work: "NFT Logo",
    image: Nftlimpsingimg,
  },
  {
    title: "Brand Suggestions",
    client: "IT",
    work: "NFT Logo",
    image: BrandSuggestionimg,
  },
];

export default ProjectsHighlight;
