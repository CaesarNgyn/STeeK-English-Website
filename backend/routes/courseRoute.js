const express = require('express');
const courseRoute = express.Router();
const courseController = require('../controllers/courseController')
const verifyJWT = require('../middleware/verifyJWT')
const verifyRole = require('../middleware/verifyRole')
//apply middleware to all the user route
// userRoute.use(verifyJWT)

courseRoute.get('/', verifyJWT, courseController.getAllCourses);

courseRoute.post('/', verifyJWT, verifyRole, courseController.createNewCourse);

courseRoute.patch('/', verifyJWT, verifyRole, courseController.updateCourse);

courseRoute.delete('/', verifyJWT, verifyRole, courseController.deleteCourse);

module.exports = courseRoute