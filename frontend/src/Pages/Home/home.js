import React from "react";
import { createProject, updateProject } from "../../Api/projectApi";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./home.css";

const Home = ({ project = {}, onSave = () => {} }) => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const handleOpenModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };
  const [projectName, setProjectName] = useState(project.projectName || "");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const projectData = { projectName };
    if (project._id) {
      await updateProject(project._id, projectData);
    } else {
      await createProject(projectData);
    }
    onSave();
    handleCloseModal();
    navigate("/projects");
  };

  return (
    <div className="align-center">
      <h2 class="main-title">Create a New Project</h2>
      <img
        src="https://ucarecdn.com/eddeeb04-7bfc-4abe-a6a5-2e362be12d95/Group16.svg"
        alt="Project creation illustration"
        class="main-image"
      />
      <p class="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in
      </p>
      <button
        type="submit"
        class="create-project-button"
        onClick={handleOpenModal}
      >
        <img
          src="https://ucarecdn.com/fb3f134e-7863-4ad4-9a8a-06cda052dee1/plus.svg"
          alt=""
          class="button-icon"
        />
        <span class="button-text">Create New Project</span>
      </button>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <div class="create-project-container">
              <h1 class="create-project-heading">Create Project</h1>

              <form class="create-project-form" onSubmit={handleSubmit}>
                <p className="align-left">Enter Project Name:</p>
                <div class="button-group">
                  <input
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                    placeholder="Type Here"
                  />
                  {projectName === "" && (
                    <p className="message">Project Name Can't be empty</p>
                  )}
                  <div>
                    <button
                      type="submit"
                      class="create-button"
                      disabled={!projectName.trim()}
                    >
                      Create
                    </button>
                    <button
                      onClick={handleCloseModal}
                      type="button"
                      class="cancel-button"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Home;
