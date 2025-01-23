"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";

const baseUrl = "https://landing-page-backend-9yrz.onrender.com/";

interface Project {
  _id: string;
  title: string;
  color: string;
  client: string;
  work: string;
  projectName: string;
  image?: string;
  storyTitle:string;
  storyDescription:string;
}

interface FormData {
  title: string;
  color: string;
  client: string;
  work: string;
  projectName: string;
  image: File | null;
  storyTitle:string;
  storyDescription:string;
}

const Dashboard: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [formData, setFormData] = useState<FormData>({
    title: "",
    color: "",
    client: "",
    work: "",
    projectName: "",
    image: null,
    storyTitle:"",
    storyDescription:"",
  });
  const [editingProjectId, setEditingProjectId] = useState<string | null>(null);

  // Fetch projects when the component mounts
  useEffect(() => {
    fetchProjects();
  }, []);

  // Fetch all projects
  const fetchProjects = async () => {
    try {
      const response = await axios.get<Project[]>(`${baseUrl}api/projects`);
      setProjects(response.data);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    if (name === "image" && files) {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };



  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (key === "stories") {
        form.append(key, JSON.stringify(value));
      } else if (value !== null) {
        form.append(key, value as string | Blob);
      }
    });

    try {
      if (editingProjectId) {
        await axios.put(`${baseUrl}${editingProjectId}`, form);
        setEditingProjectId(null);
      } else {
        await axios.post(`${baseUrl}api/projects/file`, form);
      }
      setFormData({
        title: "",
        color: "",
        client: "",
        work: "",
        projectName: "",
        image: null,
        storyTitle:"",
        storyDescription:""
      });
      fetchProjects();
    } catch (error) {
      console.error("Error submitting project:", error);
    }
  };

  // Handle delete action
  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`${baseUrl}${id}`);
      fetchProjects();
    } catch (error) {
      console.error("Error deleting project:", error);
    }
  };

  // Handle edit action
  const handleEdit = (project: Project) => {
    setEditingProjectId(project._id);
    setFormData({
      title: project.title,
      color: project.color,
      client: project.client,
      work: project.work,
      projectName: project.projectName,
      image: null,
      storyTitle:project.storyTitle,
      storyDescription:project.storyDescription
    });
  };

  return (
    <div className="min-h-screen bg-[#1A1A1A] py-10 px-5 text-[#949494]">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10">Project Dashboard</h1>

        <form
          className="bg-[#2A2A2A] p-6 rounded-lg shadow-lg mb-10"
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={formData.title}
              onChange={handleInputChange}
              className="border border-[#494949] bg-[#1A1A1A] text-[#949494] p-2 rounded w-full"
              required
            />
            <input
              type="text"
              name="color"
              placeholder="Color"
              value={formData.color}
              onChange={handleInputChange}
              className="border border-[#494949] bg-[#1A1A1A] text-[#949494] p-2 rounded w-full"
              required
            />
            <input
              type="text"
              name="client"
              placeholder="Client"
              value={formData.client}
              onChange={handleInputChange}
              className="border border-[#494949] bg-[#1A1A1A] text-[#949494] p-2 rounded w-full"
              required
            />
            <input
              type="text"
              name="work"
              placeholder="Work"
              value={formData.work}
              onChange={handleInputChange}
              className="border border-[#494949] bg-[#1A1A1A] text-[#949494] p-2 rounded w-full"
              required
            />
            <input
              type="text"
              name="projectName"
              placeholder="Project Name"
              value={formData.projectName}
              onChange={handleInputChange}
              className="border border-[#494949] bg-[#1A1A1A] text-[#949494] p-2 rounded w-full"
              required
            />
            <input
              type="file"
              name="image"
              onChange={handleInputChange}
              className="border border-[#494949] bg-[#1A1A1A] text-[#949494] p-2 rounded w-full"
            />
          </div>

          <div className="mt-4">
            <h2 className="text-xl font-semibold mb-2">Stories</h2>
           
              <div  className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="storyTitle"
                  placeholder="Story Title"
                  value={formData.storyTitle}
                  onChange={handleInputChange}
                  className="border border-[#494949] bg-[#1A1A1A] text-[#949494] p-2 rounded w-full"
                  required
                />
                <input
                  type="text"
                  name="storyDescription"
                  placeholder="Story Description"
                  value={formData.storyDescription}
                  onChange={handleInputChange}
                  className="border border-[#494949] bg-[#1A1A1A] text-[#949494] p-2 rounded w-full"
                  required
                />
               
              </div>
          
          </div>

          <button
            type="submit"
            className="mt-5 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
                      {editingProjectId ? "Update Project" : "Create Project"}
          </button>
        </form>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project._id}
              className="bg-[#2A2A2A] p-4 rounded-lg shadow-lg"
            >
              {project.image && (
                <Image
                  src={`${baseUrl}${project.image.replace(/\\/g, '/')}`}
                  alt={project.title}
                  width={300}
                  height={200}
                  className="rounded-lg mb-4"
                />
              )}
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="mb-2">
                <span className="font-semibold">Client:</span> {project.client}
              </p>
              <p className="mb-2">
                <span className="font-semibold">Work:</span> {project.work}
              </p>
              <p className="mb-4">
                <span className="font-semibold">Project Name:</span>{" "}
                {project.projectName}
              </p>

              <div className="mb-4">
                <h4 className="text-xl font-semibold">Stories</h4>
                <ul>
                  {/* {project.stories.map((story, index) => (
                    <li key={index} className="mb-2">
                      <p>
                        <span className="font-semibold">Title:</span> {story.title}
                      </p>
                      <p>
                        <span className="font-semibold">Description:</span>{" "}
                        {story.description}
                      </p>
                    </li>
                  ))} */}
                </ul>
              </div>

              <div className="flex justify-between">
                <button
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                  onClick={() => handleEdit(project)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                  onClick={() => handleDelete(project._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

