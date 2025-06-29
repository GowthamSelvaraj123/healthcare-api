const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  age: Number,
  gender: { type: String, enum: ['male', 'female', 'other'] },
  bloodGroup: String,
  address: String,
  medicalHistory: [String],
}, { timestamps: true });

module.exports = mongoose.model('Patient', patientSchema);
