const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  // user: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'User'
  // },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    min: 0
  },
  vidID: String

},
  { timestamps: true }
);

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;