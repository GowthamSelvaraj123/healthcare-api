const express = require("express");
const router = express.Router();
const { registerController, loginController, resetPasswordController, forgotPasswordController } = require("../controllers/auth.controller")

router.post('/register', registerController);
router.post('/login', loginController);
router.post('/forgot-password', resetPasswordController);
router.post('/reset-password/:token', forgotPasswordController);

module.exports = router;