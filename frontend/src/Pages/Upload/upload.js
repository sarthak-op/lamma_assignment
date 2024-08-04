// ProjectDetails.js
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getProjects, deleteProject } from "../../Api/projectApi";
import "./upload.css";
const ProjectDetails = () => {
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    const response = await getProjects();
    setProjects(response.data);
  };

  const handleDelete = async (id) => {
    await deleteProject(id);
    fetchProjects();
  };
  const handleRedirect = (id) => {
    navigate(`/transcript/${id}`);
  };
  return (
    <div>
      <div class="sidebar">
        <div class="logo-column">
          <div class="logo-wrapper">
            <a className="noUnderline" href="/">
              <div class="logo-container">
                <img
                  src="https://ucarecdn.com/41972c6e-2095-4fdc-8a1c-0bd2e0493e74/favicon.svg"
                  alt="LAMA Logo"
                  class="logo-image"
                />
                <h1 class="logo-text">LAMA.</h1>
              </div>
            </a>
          </div>
        </div>
        <ul className="list">
          <>Podcast Upload Flow</>
          <a className="noUnderline" href="/projects">
            <li>1. Projects</li>
          </a>
          <a className="noUnderline" href="/widget">
            <li>2. Widget Configurations</li>
          </a>
        </ul>
      </div>
      <div>
        <div class="main-content">
          <ul class="breadcrumbs">
            <li>
              <a href="/">
                <img
                  src="https://ucarecdn.com/4ec162df-04ba-4680-a934-15186ab74506/home.svg"
                  alt=""
                />
              </a>
            </li>
            <li>
              <a href="/projects">Sample_Project</a>
            </li>
            <li>Upload</li>
          </ul>
        </div>
        <div className="adjust">
          <header>
            <h1>Sample Project</h1>
          </header>
          <p>
            <div class="upload-options">
              <button>
                <img
                  src="https://ucarecdn.com/2458f57a-7e2e-4a51-bf17-5e1d76291b03/Frame1.svg"
                  alt=""
                />
                Upload Youtube Video
              </button>
              <button>
                {" "}
                <img
                  src="https://ucarecdn.com/4b45ab9e-581b-4f0b-9a4c-c48263259e1d/Frame2.svg"
                  alt=""
                />
                Spotify Spotify Podcast
              </button>
              <button>
                {" "}
                <img
                  src="https://ucarecdn.com/214c95f0-9aaa-42c6-8789-2c59422d4fae/image2.svg"
                  alt=""
                />
                Upload from RSS feed
              </button>
            </div>
          </p>

          <section class="notification">
            <p>All files are processed! Your widget is ready to go!</p>
            <button>Try it out!</button>
          </section>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project) => (
                <tr key={project._id}>
                  <td>{project.projectName}</td>
                  <td>Done</td>
                  <td>
                    <button
                      className="edit"
                      onClick={() => handleRedirect(project._id)}
                    >
                      Edit
                    </button>
                    |
                    <button
                      className="delete"
                      onClick={() => handleDelete(project._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
