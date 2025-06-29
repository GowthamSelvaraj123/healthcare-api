const Patient = require("../models/patient.model");

const getAllPatient = async(req, res) => {
    try
    {
        const patients = await Patient.find().populate('user');
        res.status(200).json({ success: true, message: "Get all patients successfully",data:patients});   
    }
    catch(err)
    {
        return res.status(500).json({ success: false, message: "Failed patient lists", err});
    }
}

const getPatientById = async(req, res) => {
    try
    {
        const patient = await Patient.findById(req.params.id).populate('user');
        if(!patient)
        {
            return res.status(404).json({ success: true, message: "Patient not found",data});   
        }
        res.status(200).json({ success: true, message: "The fields are required",data:patient});   
    }
    catch(err)
    {
        res.status(500).json({ success: false, message: "Failed patient list", err});
    }
}

const createPatient = async(req, res) => {
    try
    {
        const patient = new Patient(req.body);
        await patient.save();
        res.status(200).json({ success: true, message: "The fields are required",data:patient}); 
    }
    catch(err)
    {
        res.status(500).json({ success: false, message: "Failed patient lists", err});
    }
}

const updatePatient = async(req, res) => {
    try
    {
        const updatePatient = await Patient.findByIdAndUpdate(req.params.id, req.body, {new:true});
        if(!updatePatient) { 
            return res.status(200).json({ success: true, message: "Patient not found"}); 
        }
        res.status(200).json({ success: true, message: "The fields are required"}); 
    }
    catch(err)
    {
        res.status(500).json({ success: false, message: "Failed patient lists", err});
    }
}

const deletePatient = async(req, res) => {
    try
    {
        await Patient.findByIdAndDelete(req.params.id);
        res.status(200).json({ success: true, message: "delete patients Succsfully"}); 
    }
    catch(err)
    {
        res.status(500).json({ success: false, message: "Failed patient lists", err});
    }
}

module.exports = {getAllPatient, getPatientById, createPatient, updatePatient, deletePatient}
