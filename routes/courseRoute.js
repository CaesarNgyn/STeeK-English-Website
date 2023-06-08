const express = require('express');
const courseRoute = express.Router();
const courseController = require('../controllers/courseController')
const verifyJWT = require('../middleware/verifyJWT')

//apply middleware to all the user route
// userRoute.use(verifyJWT)

courseRoute.get('/', verifyJWT, courseController.getAllCourses);

courseRoute.post('/', verifyJWT, courseController.createNewCourse);

courseRoute.patch('/', verifyJWT, courseController.updateCourse);

courseRoute.delete('/', verifyJWT, courseController.deleteCourse);

module.exports = courseRoute