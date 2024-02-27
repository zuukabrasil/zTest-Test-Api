const mongoose = require('mongoose');

const testCaseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  precondition: { type: String },
  expectedResult: { type: String },
  aditionalData: { type: String },
  status: { type: String, enum: ['Backlog', 'In-Progress', 'Done'], default: 'active' }, // campo para mudar o status
  file: { type: String }, // campo para upload de arquivo (salvar o caminho do arquivo)
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' } // campo para armazenar o ID do usuário que criou o testCase
});

module.exports = mongoose.model('Test Case', testCaseSchema);
