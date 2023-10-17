const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema(
  {
    Name: {
      type: String,
      required: true,
    },
    Description: {
      type: String,
      required: false,
    },
    Recommendation: {
      type: String,
      required: false,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const Category = mongoose.model('category', categorySchema);

module.exports = Category;
