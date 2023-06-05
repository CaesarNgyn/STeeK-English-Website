const User = require('../models/user')
const Course = require('../models/course')
const asyncHandler = require('express-async-handler')
const bcrypt = require('bcrypt')

// @desc Get all users
// @route GET /users
// @access Private
const getAllUsers = asyncHandler(async (req, res) => {
  // Get all users from MongoDB excluding their password
  // and lean() method for not return excessive data
  const users = await User.find().select('-password').lean()

  // If no users 
  if (!users?.length) {
    return res.status(400).json({ message: 'No users found' })
  }

  res.json(users)
})

// @desc Create new user
// @route POST /users
// @access Private
const createNewUser = asyncHandler(async (req, res) => {
  const { username, password, email, address, phone, image, roles } = req.body

  // Confirm data
  console.log(roles)
  if (!username || !password || !email || (roles && !Array.isArray(roles)) || (roles && !roles.length)) {
    return res.status(400).json({ message: 'Username, Password, and Email are required' });
  }


  // Check for duplicate username
  const duplicate = await User.findOne({ email }).lean().exec()

  if (duplicate) {
    return res.status(409).json({ message: 'Duplicate email' })
  }

  // Hash password 
  const hashedPwd = await bcrypt.hash(password, 10) // salt rounds

  const userObject = {
    email, username, "password": hashedPwd,
    roles, address, phone, image
  }

  // Create and store new user 
  const user = await User.create(userObject)

  if (user) { //created 
    res.status(201).json({ message: `New user ${email} created` })
  } else {
    res.status(400).json({ message: 'Invalid user data received' })
  }
})

// @desc Update a user
// @route PATCH /users
// @access Private
const updateUser = asyncHandler(async (req, res) => {
  const { id, username, password, email, address, phone, image, roles } = req.body

  // Confirm data 

  if (!id || !email || (roles && !Array.isArray(roles)) || (roles && !roles.length)) {
    return res.status(400).json({ message: 'All fields except password are required' })
  }

  // Does the user exist to update?
  const user = await User.findById(id).exec()

  if (!user) {
    return res.status(400).json({ message: 'User not found' })
  }

  // Check for duplicate 
  const duplicate = await User.findOne({ email }).lean().exec()

  // Allow updates to the original user 
  if (duplicate && duplicate?._id.toString() !== id) {
    return res.status(409).json({ message: 'Duplicate email' })
  }

  user.username = username
  user.roles = roles
  user.password = password
  user.email = email
  user.address = address
  user.phone = phone
  user.image = image


  if (password) {
    // Hash password 
    user.password = await bcrypt.hash(password, 10) // salt rounds 
  }

  const updatedUser = await user.save()

  res.json({ message: `${updatedUser.email} updated` })
})

// @desc Delete a user
// @route DELETE /users
// @access Private
const deleteUser = asyncHandler(async (req, res) => {
  const { id } = req.body

  // Confirm data
  if (!id) {
    return res.status(400).json({ message: 'User ID Required' })
  }


  // Does the user exist to delete?
  const user = await User.findById(id).exec()

  if (!user) {
    return res.status(400).json({ message: 'User not found' })
  }

  const result = await user.deleteOne()

  const reply = `Username ${result.email} with ID ${result._id} deleted`

  res.json(reply)
})

module.exports = {
  getAllUsers,
  createNewUser,
  updateUser,
  deleteUser
}