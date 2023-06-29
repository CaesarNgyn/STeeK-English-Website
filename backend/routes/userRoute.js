const express = require('express');
const userRoute = express.Router();
const userController = require('../controllers/userController')
const verifyJWT = require('../middleware/verifyJWT')
const verifyRole = require('../middleware/verifyRole')
//apply middleware to all the user route
// userRoute.use(verifyJWT)

userRoute.get('/', verifyJWT, verifyRole, userController.getAllUsers);

userRoute.post('/', userController.createNewUser);

userRoute.patch('/', verifyJWT, userController.updateUser);

userRoute.delete('/', verifyJWT, verifyRole, userController.deleteUser);

userRoute.post('/email', verifyJWT, userController.findUserByEmail)

userRoute.post('/password', verifyJWT, userController.postChangeUserPassword)

userRoute.post('/buy', verifyJWT, userController.postBuyCourse)

module.exports = userRoute