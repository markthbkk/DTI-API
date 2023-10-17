const mongoose = require('mongoose');

const facultySchema = new mongoose.Schema(
  {
    Name: {
      type: String,
      required: true,
    },
    DN: {
      type: String,
      required: false,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const Faculty = mongoose.model('faculty', facultySchema);

module.exports = Faculty;
