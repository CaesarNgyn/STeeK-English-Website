const express = require('express');
const authRoute = express.Router();
const authController = require('../controllers/authController')
const loginLimiter = require('../middleware/loginLimiter')
authRoute.post('/login', loginLimiter, authController.login)

authRoute.post('/refresh', authController.refresh)




module.exports = authRoute