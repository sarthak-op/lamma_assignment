const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  projectName: { type: String, required: true },
  episodes: { type: String, required: false },
  transcript: { type: String, required: false },
});

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: false },
  projects: [projectSchema],
});

const User = mongoose.model("User", userSchema);
const Project = mongoose.model("Project", projectSchema);

module.exports = { User, Project };
