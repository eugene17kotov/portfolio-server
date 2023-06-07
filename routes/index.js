const express = require('express');
const router = express.Router();
const ctrlWrapper = require('../ctrlWrapper.js');
const contactController = require('../contactController.js');

router.post('/contact', ctrlWrapper(contactController));

module.exports = router;
