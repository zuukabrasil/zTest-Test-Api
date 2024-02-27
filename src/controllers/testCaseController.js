// controllers/projectController.js
const TestCase = require('../models/testCase');

module.exports = {
  async getAllTestCase(req, res) {
    try {
      const TestCases = await TestCase.find();
      res.json(TestCases);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  async createTestCase(req, res) {
    const TestCase = new TestCase(req.body);
    try {
      const newTestCase = await TestCase.save();
      res.status(201).json(newTestCase);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  async getTestCaseById(req, res) {
    try {
      const TestCase = await TestCase.findById(req.params.id);
      if (!TestCase) {
        return res.status(404).json({ message: 'Project not found' });
      }
      res.json(TestCase);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  async updateTestCase(req, res) {
    try {
      const updatedTestCase = await TestCase.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedTestCase) {
        return res.status(404).json({ message: 'TestCase not found' });
      }
      res.json(updatedTestCase);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  async deleteTestCase(req, res) {
    try {
      const deletedTestCase = await TestCase.findByIdAndDelete(req.params.id);
      if (!deletedTestCase) {
        return res.status(404).json({ message: 'TestCase not found' });
      }
      res.json({ message: 'TestCase deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};