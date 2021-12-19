const express = require('express');
const activityController = require('../../controllers/activity.controllers');

const router = express.Router();
router
    .route('/search')
    .get(activityController.search);


module.exports = router;