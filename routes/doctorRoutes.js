const express = require("express");
const router = express.Router();
const {getAllDoctors, getAllDoctorById, createDoctor, updateDoctor, deleteDoctor} = require("../controllers/doctor.controller");
const authMiddleware = require("../middlewares/auth.middleware");
router.get('/', authMiddleware, getAllDoctors);
router.get('/:id', authMiddleware, getAllDoctorById);
router.post('/', authMiddleware, createDoctor);
router.put('/:id', authMiddleware, updateDoctor);
router.delete('/:id', authMiddleware, deleteDoctor);