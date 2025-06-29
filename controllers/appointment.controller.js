const Appointment = require("../models/appointment.model");

const getAllAppointments = async(req, res) => {
    try
    {
        const appointments = await Appointment.find.apply().populate('doctor').populate('patient');
        res.status(200).json({ success: true, message: "Get all appointments sucssfully", data:appointments});
    }
    catch(err)
    {
        res.status(200).json({ success: true, message: "server error", err});
    }
}

const getAppointmentById = async(req, res) => {
    try 
    {
        const appointment = await Appointment.findById(req.params.id);
        if (!appointment) { 
            return res.status(404).json({ message: 'Appointment not found' });
        }
        res.status(200).json({ success: true, message: "Get all appointments sucssfully", data:appointment});
    }
    catch(err)
    {
        res.status(200).json({ success: true, message: "server error", err});
    }
}

const createAppointment = async(req, res) => {
    try
    {
        const appointment = new Appointment.create(req.body);
        await appointment.save();
        res.status(201).json({ success: true, message: "Create appointment sucssfully", data:appointment});
    }
    catch(err)
    {
        res.status(400).json({ success: true, message: "server error", err});
    }
}

const updateAppointment = async(req, res) => {
    try
    {
        const appointment = Appointment.findByIdAndUpdate(req.params.id);
        if(!appointment)
        {
        res.status(201).json({ success: true, message: "Appointment not found"});   
        }
        res.status(201).json({ success: true, message: "Appointment updated", data:appointment});
    }
    catch(err)
    {
        res.status(400).json({ success: true, message: "server error", err});
    }
}

const deleteAppointment = async(req, res) => {
    try
    {
        const appointment = await Appointment.findByIdAndDelete(req.params.id);
        res.status(201).json({ success: true, message: "Appointment delete", data:appointment});
    }
    catch(err)
    {
        res.status(400).json({ success: true, message: "server error", err});
    }
}

module.exports = {getAllAppointments, getAppointmentById, createAppointment, updateAppointment, deleteAppointment}