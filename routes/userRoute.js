const express = require('express');
const userRoute = express.Router();
const userController = require('../controllers/userController')
userRoute.get('/', userController.getAllUsers);

userRoute.post('/', userController.createNewUser);

userRoute.patch('/', userController.updateUser);

userRoute.delete('/', userController.deleteUser);

module.exports = userRoute