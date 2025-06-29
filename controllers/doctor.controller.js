const Doctor = require("../models/doctor.model");
const { create } = require("../models/patient.model");

const getAllDoctors = async(req, res) => {
    try
    {
        const doctors = await Doctor.find().populate('user')
        res.status(200).json({ success: true, message: "Get all doctors successfully", data:doctors});
    }
    catch(err)
    {
        res.status(500).json({ success: true, message: "server failed", err});
    }
}
const getAllDoctorById = async(req, res) => {
    try
    {
        const doctor = await Doctor.findById(req.params.id);
        if(!doctor)
        {
         return res.status(200).json({ success: true, message: "Data not found"});    
        }
        res.status(200).json({ success: true, message: "Get doctor details sucssfully"});
    }
    catch(err)
    {
        res.status(500).json({ success: true, message: "server failed", err});
    }
}

const createDoctor = async(req, res) => {
    try
    {
        const doctor = new Doctor(req.body);
        await doctor.save();
        res.status(200).json({ success: true, message: "Create Doctor Successfully"});
    }
    catch(err)
    {
        res.status(500).json({ success: true, message: "server failed", err});
    }
}

const updateDoctor = async(req, res) => {
    try
    {
        const doctor = await Doctor.findByIdAndUpdate(req.params.id, req.body, {new:true});
        if(!doctor)
        {
            return res.status(404).json({ success: true, message: "Doctor not found"});    
        }
        res.status(200).json({ success: true, message: "Get doctor sucssfully"});
    }
    catch(err)
    {
        res.status(500).json({ success: true, message: "server failed", err});
    }
}


const deleteDoctor = async(req, res) => {
    try
    {
        const deleteDoctor = await Doctor.findByIdAndDelete(req.params.id);
        res.status(200).json({ success: true, message: "Get doctor deleted sucssfully", data:deleteDoctor});
    }
    catch(err)
    {
        res.status(500).json({ success: true, message: "server failed", err});
    }
}

module.exports = {getAllDoctors, getAllDoctorById, createDoctor, updateDoctor, deleteDoctor}