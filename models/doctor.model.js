const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  specialization: String,
  experience: Number, // in years
  qualification: String,
  hospitalName: String,
  isVerified: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model('Doctor', doctorSchema);
