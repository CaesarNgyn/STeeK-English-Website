const Course = require('../models/course')
const User = require('../models/user')
const asyncHandler = require('express-async-handler')

// @desc Get all courses 
// @route GET /courses
// @access Private
const getAllCourses = asyncHandler(async (req, res) => {
  // Get all courses from MongoDB
  const courses = await Course.find().lean()

  // If no courses 
  if (!courses?.length) {
    return res.status(400).json({ message: 'No courses found' })
  }

  // Add username to each Course before sending the response 
  // See Promise.all with map() here: https://youtu.be/4lqJBBEpjRE 
  // You could also do this with a for...of loop
  const coursesWithUser = await Promise.all(courses.map(async (Course) => {
    const user = await User.findById(Course.user).lean().exec()
    return { ...Course, username: user.username }
  }))

  res.json(coursesWithUser)
})

// @desc Create new Course
// @route POST /courses
// @access Private
const createNewCourse = asyncHandler(async (req, res) => {
  const { title, description, price } = req.body

  // Confirm data
  if (!description || !title) {
    return res.status(400).json({ message: 'All fields are required' })
  }

  // Check for duplicate title
  const duplicate = await Course.findOne({ title }).lean().exec()

  if (duplicate) {
    return res.status(409).json({ message: 'Duplicate Course title' })
  }

  // Create and store the new user 
  const Course = await Course.create({ title, description, price })

  if (Course) { // Created 
    return res.status(201).json({ message: 'New Course created' })
  } else {
    return res.status(400).json({ message: 'Invalid Course data received' })
  }

})

// @desc Update a Course
// @route PATCH /courses
// @access Private
const updateCourse = asyncHandler(async (req, res) => {
  const { title, description, price } = req.body

  // Confirm data
  if (!title || !description) {
    return res.status(400).json({ message: 'All fields are required' })
  }

  // Confirm Course exists to update
  const Course = await Course.findById(id).exec()

  if (!Course) {
    return res.status(400).json({ message: 'Course not found' })
  }

  // Check for duplicate title
  const duplicate = await Course.findOne({ title }).lean().exec()

  // Allow renaming of the original Course 
  if (duplicate && duplicate?._id.toString() !== id) {
    return res.status(409).json({ message: 'Duplicate Course title' })
  }


  Course.title = title
  Course.description = description
  Course.price = price

  const updatedCourse = await Course.save()

  res.json(`'${updatedCourse.title}' updated`)
})

// @desc Delete a Course
// @route DELETE /courses
// @access Private
const deleteCourse = asyncHandler(async (req, res) => {
  const { id } = req.body

  // Confirm data
  if (!id) {
    return res.status(400).json({ message: 'Course ID required' })
  }

  // Confirm Course exists to delete 
  const Course = await Course.findById(id).exec()

  if (!Course) {
    return res.status(400).json({ message: 'Course not found' })
  }

  const result = await Course.deleteOne()

  const reply = `Course '${result.title}' with ID ${result._id} deleted`

  res.json(reply)
})

module.exports = {
  getAllCourses,
  createNewCourse,
  updateCourse,
  deleteCourse
}