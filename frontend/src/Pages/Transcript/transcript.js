import React, { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import { getProjectById } from "../../Api/projectApi";
import "./transcript.css";
const Transcript = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchProjectDetails = useCallback(async () => {
    try {
      const response = await getProjectById(id);
      console.log("API Response:", response.data);
      setProject(response.data);
    } catch (error) {
      console.error("Error fetching project details:", error);
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchProjectDetails();
  }, [fetchProjectDetails]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!project) {
    return <div>No project found.</div>;
  }

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
          <li>Transcript</li>
        </ul>
      </div>
      <div className="adjust">
        <header>
          <h1 className="title">Edit Transcript</h1>
        </header>
       <form>
          <textarea
            className="text-element"
            type="text"
            name="transcript"
            value={project.transcript}
          ></textarea>
        </form>
      </div>
    </div>
  );
};

export default Transcript;
