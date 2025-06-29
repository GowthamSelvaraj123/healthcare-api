const express = require("express");
const router = express.Router();
const {getAllAppointments, getAppointmentById, createAppointment, updateAppointment, deleteAppointment} = require("../controllers/appointment.controller");
const authMiddleware = require("../middlewares/auth.middleware");

router.get('/', authMiddleware, getAllAppointments);
router.get('/:id', authMiddleware, getAppointmentById);
router.post('/', authMiddleware, createAppointment);
router.put('/:id', authMiddleware, updateAppointment);
router.delete('/:id', authMiddleware, deleteAppointment);

module.exports = router;