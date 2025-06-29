const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  patient: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true },
  doctor: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor', required: true },
  appointmentDate: { type: Date, required: true },
  symptoms: String,
  status: { type: String, enum: ['pending', 'approved', 'cancelled', 'completed'], default: 'pending' },
  prescription: { type: String },
  notes: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Appointment', appointmentSchema);
