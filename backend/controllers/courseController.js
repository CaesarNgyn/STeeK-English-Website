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
  // const coursesWithUser = await Promise.all(courses.map(async (Course) => {
  //   const user = await User.findById(Course.user).lean().exec()
  //   return { ...Course, username: user.username }
  // }))

  res.json(courses)
})

// @desc Create new Course
// @route POST /courses
// @access Private
const createNewCourse = asyncHandler(async (req, res) => {
  const { title, description, price, listVideo } = req.body

  // Confirm data
  if (!description || !title || !price || !listVideo) {
    return res.status(400).json({ message: 'All fields are required' })
  }

  // Check for duplicate title
  const duplicate = await Course.findOne({ title }).lean().exec()

  if (duplicate) {
    return res.status(409).json({ message: 'Duplicate Course title' })
  }

  // Create and store the new user 
  const course = await Course.create({ title, description, price, listVideo })

  if (!course) { // Created 
    return res.status(400).json({ message: 'Invalid Course data received' })
  }

  res.json({
    EC: 0,
    message: `Tạo khóa học ${course.title} thành công`
  })

})

// @desc Update a Course
// @route PATCH /courses
// @access Private
const updateCourse = asyncHandler(async (req, res) => {
  const { title, description, price, listVideo } = req.body

  // Confirm data
  if (!title) {
    return res.status(400).json({ message: 'All fields are required' })
  }

  // Confirm Course exists to update
  const course = await Course.findOne({ title }).exec();

  if (!course) {
    return res.status(400).json({ message: 'Course not found' })
  }

  // Check for duplicate title
  const duplicate = await Course.findOne({ title }).lean().exec()

  // Allow renaming of the original Course 
  if (duplicate && duplicate?._id.toString() !== course.id) {
    return res.status(409).json({ message: 'Duplicate Course title' })
  }


  course.title = title
  course.description = description
  course.price = price
  course.listVideo = listVideo

  const updatedCourse = await Course.findByIdAndUpdate(course._id, course)

  console.log(updatedCourse)

  res.json({
    EC: 0,
    message: `Lưu thông tin khóa học ${updatedCourse.title} thành công`
  })
})

// @desc Delete a Course
// @route DELETE /courses
// @access Private
const deleteCourse = asyncHandler(async (req, res) => {
  const { title } = req.body
  console.log("title bakcend,", title)

  // Confirm data
  if (!title) {
    return res.status(400).json({ message: 'Course Title required' })
  }

  // Confirm Course exists to delete 
  const course = await Course.findOne({ title }).exec();

  console.log("course backend", course)

  if (!course) {
    return res.status(400).json({ message: 'Course not found' })
  }

  const result = await Course.deleteOne({ title });


  const reply = `Khóa học '${course.title}' với ID ${course._id} đã được xóa`
  console.log("reply", reply)
  res.json({
    EC: 0,
    reply
  })
})

module.exports = {
  getAllCourses,
  createNewCourse,
  updateCourse,
  deleteCourse
}