import axios from "axios";

const API_URL = "http://localhost:5001";

export const getUsers = () => axios.get(`${API_URL}/user`);
export const getUserById = (id) => axios.get(`${API_URL}/user/${id}`);
export const createUser = (userData) => axios.post(`${API_URL}/user`, userData);
export const updateUser = (id, userData) =>
  axios.patch(`${API_URL}/user/${id}`, userData);
export const deleteUser = (id) => axios.delete(`${API_URL}/user/${id}`);
