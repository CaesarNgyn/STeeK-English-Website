const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  // user: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'User'
  // },
  title: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: String,
    min: 0,
    required: true
  },
  listVideo: {
    type: [String],
    default: [],
    required: true
  }

},
  { timestamps: true }
);

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;