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

  res.json({
    EC: 0,
    users: users
  })
})

// @desc Create new user
// @route POST /users
// @access Private
const createNewUser = asyncHandler(async (req, res) => {
  const { username, password, email, address, phone, image, roles } = req.body

  // Confirm data
  console.log(roles)
  if (!username || !password || !email) {
    return res.status(400).json(
      {
        message: 'Username, Password, and Email are required'
      }
    );
  }


  // Check for duplicate username
  const duplicate = await User.findOne({ email }).lean().exec()

  if (duplicate) {
    return res.status(409).json(
      {
        message: 'Email này đã tồn tại, vui lòng chọn Email khác!'
      }
    )
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
    res.status(201).json(
      {
        EC: 0,
        message: `Tạo mới tài khoản ${email} thành công!`
      }
    )
  } else {
    res.status(400).json({ message: 'Invalid user data received' })
  }
})

// @desc Update a user
// @route PATCH /users
// @access Private
const updateUser = asyncHandler(async (req, res) => {
  const { username, email, address, phone, roles } = req.body

  // Confirm data 

  if (!email) {
    return res.status(400).json({ message: 'All fields except password are required' })
  }

  // Does the user exist to update?
  const user = await User.findOne({ email }).lean().exec()

  if (!user) {
    return res.status(400).json({ message: 'User not found' })
  }

  // Check for duplicate 
  const duplicate = await User.findOne({ email }).lean().exec()


  // Allow updates to the original user 
  // if (duplicate && duplicate?._id.toString() !== id) {
  //   return res.status(409).json({ message: 'Duplicate email' })
  // }

  user.username = username
  user.roles = roles
  // user.password = password
  user.email = email
  user.address = address
  user.phone = phone



  // if (password) {
  //   // Hash password 
  //   user.password = await bcrypt.hash(password, 10) // salt rounds 
  // }

  let updatedUser = await User.findByIdAndUpdate(user._id, user);

  res.json({
    EC: 0,
    message: `Lưu thông tin người dùng ${updatedUser.email} thành công!`
  })
})

// @desc Delete a user
// @route DELETE /users
// @access Private
const deleteUser = asyncHandler(async (req, res) => {
  const { email } = req.body
  // console.log("Email: ", email)
  // Confirm data
  if (!email) {
    return res.status(400).json({ message: 'User Email Required' })
  }


  // Does the user exist to delete?
  const user = await User.findOne({ email }).lean().exec()

  if (!user) {
    return res.status(400).json({ message: 'User not found' })
  }

  if (user.roles === 'admin' || user.roles === 'Admin') {
    return res.status(403).json({ message: 'Admin cannot be deleted' });
  }

  const result = await User.deleteOne({ email })

  const reply = `Người dùng ${user.email} với ID ${user._id} đã được xóa.`

  res.json({
    EC: 0,
    reply
  })
})

const findUserByEmail = asyncHandler(async (req, res) => {
  const { email } = req.body;

  // Confirm data
  if (!email) {
    return res.status(400).json({ message: 'Email is required' });
  }

  // Find the user by email
  const user = await User.findOne({ email }).exec();

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  res.json(user);
});


module.exports = {
  getAllUsers,
  createNewUser,
  updateUser,
  deleteUser,
  findUserByEmail
}