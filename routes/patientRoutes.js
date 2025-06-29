const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patient.controller');
const authMiddleware = require('../middlewares/auth.middleware');

router.get('/', authMiddleware, patientController.getAllPatients);
router.get('/:id', authMiddleware, patientController.getPatientById);
router.post('/', authMiddleware, patientController.createPatient);
router.put('/:id', authMiddleware, patientController.updatePatient);
router.delete('/:id', authMiddleware, patientController.deletePatient);

module.exports = router;