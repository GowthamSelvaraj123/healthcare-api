const mongoose = require('mongoose');

const prescriptionSchema = new mongoose.Schema({
  appointment: { type: mongoose.Schema.Types.ObjectId, ref: 'Appointment', required: true },
  doctor: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor' },
  patient: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient' },
  medications: [
    {
      name: String,
      dosage: String,
      instructions: String
    }
  ],
  issuedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Prescription', prescriptionSchema);
