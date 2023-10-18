const dtevent = require('../models/DTEventModel');
const faculty = require('../models/Faculty');
const category = require('../models/Category');

exports.getAllDTEvents = async (req, res) => {
  console.log('Getting Requested events');

  try {
    const DTEvents = await dtevent.find();
    res.status(200).send(DTEvents);
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.createDTEvent = async (req, res) => {
  console.log('creating new event');

  try {
    console.log(req.body);
    const DTEvent = await dtevent.create(req.body);
    res.status(200).send(DTEvent);
  } catch (err) {
    res.status(500).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.getSingleDTEvent = async (req, res) => {
  console.log('Getting Requested event');
  console.log(req.params.id);
  try {
    const DTEvent = await dtevent.find({ _id: req.params.id });
    console.log(DTEvent);
    res.status(200).send(DTEvent);
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.updateDTEvent = async (req, res) => {
  console.log('Updating Requested event');
  console.log(req.params.id);
  try {
    const DTEvent = await dtevent.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    console.log(DTEvent);
    res.status(200).send(DTEvent);
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.getAllFaculties = async (req, res) => {
  console.log('Getting Requested Faculties');

  try {
    const Faculties = await faculty.find();
    res.status(200).send(Faculties);
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};


exports.getAllCategories = async (req, res) => {
  console.log('Getting Requested Categories');

  try {
    const Categories = await category.find();
    res.status(200).send(Categories);
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.createCategory = async (req, res) => {
  console.log('creating new Category');

  try {
    console.log(req.body);
    const Category = await category.create(req.body);
    res.status(200).send(Category);
  } catch (err) {
    res.status(500).json({
      status: 'fail',
      message: err,
    });
  }
};
