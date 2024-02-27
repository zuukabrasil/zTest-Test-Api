const mongoose = require('mongoose');

const testCaseExecutedSchema = new mongoose.Schema({
    status: { type: String, enum: ['In-Progress', 'Pass', 'Failed', 'Blokck', 'Not Applicable'], default: 'active' },
});

module.exports = mongoose.model('Test Case Executed', testCaseExecutedSchema);
