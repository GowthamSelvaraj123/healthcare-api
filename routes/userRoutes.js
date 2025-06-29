const express = require("express");
const router = express.Router();
const {updateUserProfile, getUserProfile} = require("../controllers/user.controller");
const authMiddleware = require("../middlewares/auth.middleware");
router.get('/profile', authMiddleware , updateUserProfile);
router.put('/profile', authMiddleware , getUserProfile);

module.exports = router;