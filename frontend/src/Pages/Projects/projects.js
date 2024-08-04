import React, { useEffect, useState } from "react";
import { getProjects } from "../../Api/projectApi";
import "./projects.css";
const ProjectList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    const response = await getProjects();
    setProjects(response.data);
  };

  return (
    <div className="Projects-text">
      <p className="heading">Projects</p>

      <div className="container">
        {projects.map((project) => (
          <div className="" key={project._id}>
            <div className="column">
              <div className="div-6">
                <div className="div-7">
                  <a className="noUnderline" href={`/upload/${project._id}`}>
                    <div className="div-8">
                      <div className="column-2">
                        <div className="sp">SP</div>
                      </div>
                      <div className="column-3">
                        <div className="div-9">
                          <div className="sample-project">
                            {project.projectName}
                          </div>
                          <div className="episodes-4">
                            {project.episodes} Episodes
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
