const express = require('express');
const courseRoute = express.Router();
const courseController = require('../controllers/courseController')
const verifyJWT = require('../middleware/verifyJWT')

//apply middleware to all the user route
// userRoute.use(verifyJWT)

courseRoute.get('/', verifyJWT, userController.getAllUsers);

courseRoute.post('/', userController.createNewUser);

courseRoute.patch('/', verifyJWT, userController.updateUser);

courseRoute.delete('/', verifyJWT, userController.deleteUser);

module.exports = courseRoute