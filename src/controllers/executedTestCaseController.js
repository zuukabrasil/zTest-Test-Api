const ExecutedTestCase = require('../models/executedTestCase');

module.exports = {
  async updatedTestCasetatus(req, res) {
    try {
      const updatedTestCasetatus = await ExecutedTestCase.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedTestCasetatus) {
        return res.status(404).json({ message: 'Test Case not found' });
      }
      res.json(updatedTestCasetatus);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
}
