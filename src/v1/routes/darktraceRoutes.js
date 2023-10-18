const express = require('express');
const darktraceController = require('../controllers/darktraceController');

const router = express.Router();

router
  .route('/api/v1/darktrace')
  .get(darktraceController.getAllDTEvents)
  .post(darktraceController.createDTEvent);

router.route('/api/v1/darktrace/:id').get(darktraceController.getSingleDTEvent).patch(darktraceController.updateDTEvent);

router.route('/api/v1/faculty').get(darktraceController.getAllFaculties);
router.route('/api/v1/category').get(darktraceController.getAllCategories).post(darktraceController.createCategory);

module.exports = router;
