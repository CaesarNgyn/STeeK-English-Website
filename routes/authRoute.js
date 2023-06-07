const express = require('express');
const authRoute = express.Router();
const authController = require('../controllers/authController')
const loginLimiter = require('../middleware/loginLimiter')
authRoute.post('/', loginLimiter)

authRoute.get('/refresh')

authRoute.post('/logout')


module.exports = authRoute