const Project = require('../models/project');

module.exports = {
  async getAllProjects(req, res) {
    try {
      const projects = await Project.find();
      res.json(projects);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  async createProject(req, res) {
    const project = new Project(req.body);
    try {
      const newProject = await project.save();
      res.status(201).json(newProject);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  async getProjectById(req, res) {
    try {
      const project = await Project.findById(req.params.id);
      if (!project) {
        return res.status(404).json({ message: 'Project not found' });
      }
      res.json(project);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  async updateProject(req, res) {
    try {
      const updatedProject = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedProject) {
        return res.status(404).json({ message: 'Project not found' });
      }
      res.json(updatedProject);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  async deleteProject(req, res) {
    try {
      const deletedProject = await Project.findByIdAndDelete(req.params.id);
      if (!deletedProject) {
        return res.status(404).json({ message: 'Project not found' });
      }
      res.json({ message: 'Project deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};
