const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  address: {
    type: String,
  },
  phone: {
    type: String,
  },
  image: {
    type: String
  },
  roles: {
    type: [String],
    default: ["User"]
  }
},
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

module.exports = User;