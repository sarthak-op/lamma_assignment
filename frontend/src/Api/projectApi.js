import axios from "axios";

const API_URL = "http://localhost:5001";

export const getProjects = () => axios.get(`${API_URL}/projects`);
export const getProjectById = (id) => axios.get(`${API_URL}/projects/${id}`);
export const createProject = (projectData) =>
  axios.post(`${API_URL}/projects`, projectData);
export const updateProject = (id, projectData) =>
  axios.patch(`${API_URL}/projects/${id}`, projectData);
export const deleteProject = (id) => axios.delete(`${API_URL}/projects/${id}`);
