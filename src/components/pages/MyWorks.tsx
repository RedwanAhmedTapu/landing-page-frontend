"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";

interface Project {
  _id: string;
  title: string;
  color: string;
  client: string;
  work: string;
  projectName: string;
  image?: string;
}

const MyWorks: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const baseUrl = "http://localhost:5000/"; // Adjust this URL based on your backend setup

  // Fetch projects when the component mounts
  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await axios.get<Project[]>(`${baseUrl}api/projects`);
      setProjects(response.data);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  return (
    <div className="relative text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="pl-4 lg:pl-28 flex flex-col gap-y-6">
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-start mb-4">
              My Works
            </h1>
            <p className="text-start text-gray-400 mb-6 sm:mb-8">Showcase About Works</p>
          </div>
          <div className="w-full border border-b border-[#949494] mb-6 sm:mb-8"></div>
        </div>

        {/* Projects Grid */}
        <div className="flex flex-wrap gap-8 justify-center mt-10">
          {projects.map((project, index) => {
            const isEvenRow = Math.floor(index / 3) % 2 === 1;
            const widthClass =
              index === 5 ? "w-80" : isEvenRow ? "w-[calc(41%-0.8rem)]" : "w-80";

            return (
              <div
                key={project._id}
                className={`${widthClass} h-96 rounded-lg overflow-hidden transform hover:scale-105 transition duration-300`}
              >
        <Link href={`project-details/${project._id}`}>

                <div className="h-72 flex items-center justify-center">
                  {project.image ? (
                    <Image
                      src={`${baseUrl}${project.image.replace(/\\/g, '/')}`}
                      alt={project.title}
                      width={320}
                      height={288}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="h-full w-full bg-gray-300 flex items-center justify-center">
                      <p>No Image Available</p>
                    </div>
                  )}
                </div>
                <div className="p-4 text-center">
                  <p className="text-sm text-gray-400 uppercase">{project.color}</p>
                  <h2 className="text-lg font-semibold">{project.title}</h2>
                </div>
      </Link>

              </div>
            );
          })}
        </div>

        {/* Load More Button */}
        <div className="mt-12 text-center">
          <button className="px-6 py-3 text-gray-900 bg-yellow-400 rounded-full hover:bg-yellow-500 transition duration-300">
            Load More Works
          </button>
        </div>
      </div>

      {/* Decorative Vector */}
      <div
        style={{
          borderRadius: "58% 42% 19% 81% / 56% 79% 21% 44%",
        }}
        className="absolute bg-[#ffffff] opacity-[0.10] w-64 h-64 sm:w-80 sm:h-80 -top-4 left-8 sm:left-20 blur-[40px] shadow-3xl transform -rotate-[189deg] bg-gradient-to-tl from-transparent via-white to-transparent"
      ></div>
    </div>
  );
};

export default MyWorks;
