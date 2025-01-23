"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import { useParams } from "next/navigation";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi"; // Importing half-arrow icons

interface Project {
  _id: string;
  title: string;
  color: string;
  client: string;
  work: string;
  projectName: string;
  storyTitle: string;
  storyDescription: string;
  image?: string;
}

const ProjectDetail: React.FC = () => {
  const [project, setProject] = useState<Project | null>(null);
  const baseUrl = "http://localhost:5000/api/projects";
  const { slug } = useParams();

  useEffect(() => {
    if (typeof slug === "string") {
      fetchProject(slug);
    }
  }, [slug]);

  const fetchProject = async (slug: string) => {
    try {
      const response = await axios.get(`${baseUrl}/${slug}`);
      setProject(response.data);
    } catch (error) {
      console.error("Error fetching project details:", error);
    }
  };

  if (!project) {
    return <p className="text-white text-center mt-12">Loading project details...</p>;
  }

  return (
    <div className="relative text-white min-h-screen px-4 sm:px-6 lg:px-64 py-12">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="w-full py-8">
          <div className="flex flex-col gap-y-6">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-start mb-4">
                Project Detail
              </h1>
              <p className="text-start text-gray-400 text-base sm:text-lg mb-6">
                Details About The Project
              </p>
            </div>
            <div className="w-full border border-b border-[#949494] mb-6"></div>
          </div>
        </div>

        {/* Main Image */}
        <div className="rounded-lg overflow-hidden shadow-lg">
          {project.image ? (
            <Image
              src={`http:/localhost:5000/${project.image.replace(/\\/g, "/")}`}
              alt={project.title}
              className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
              width={800}
              height={500}
            />
          ) : (
            <div className="w-full h-[300px] sm:h-[400px] lg:h-[500px] bg-gray-700 flex items-center justify-center">
              <p className="text-gray-400">Image not available</p>
            </div>
          )}
        </div>

        {/* Project Story Section */}
        <div className="space-y-6 px-4 sm:px-12 lg:px-16">
          <h2 className="text-2xl sm:text-3xl font-bold">{project.storyTitle}</h2>
          <p className="text-[#949494] text-sm sm:text-base leading-7">{project.storyDescription}</p>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-between items-center text-gray-400 mt-8 px-4 sm:px-12 lg:px-16">
          {/* Left Arrow */}
          <button
            className="flex items-center space-x-2 hover:text-white"
          >
            <FiArrowLeft size={24} /> {/* Left Arrow Icon */}
            <span>Back to Projects</span>
          </button>

          {/* Right Arrow */}
          <button
            className="flex items-center space-x-2 hover:text-white"
          >
            <span>Next Project</span>
            <FiArrowRight size={24} /> {/* Right Arrow Icon */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
