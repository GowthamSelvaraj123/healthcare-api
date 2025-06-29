const mongoose = require('mongoose');

const medicalRecordSchema = new mongoose.Schema({
  patient: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient' },
  title: String,
  description: String,
  date: Date,
  documentUrl: String
}, { timestamps: true });

module.exports = mongoose.model('MedicalRecord', medicalRecordSchema);
