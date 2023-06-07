const express = require('express');
const userRoute = express.Router();
const userController = require('../controllers/userController')
const verifyJWT = require('../middleware/verifyJWT')

//apply middleware to all the user route
// userRoute.use(verifyJWT)

userRoute.get('/', verifyJWT, userController.getAllUsers);

userRoute.post('/', userController.createNewUser);

userRoute.patch('/', verifyJWT, userController.updateUser);

userRoute.delete('/', verifyJWT, userController.deleteUser);

module.exports = userRoute