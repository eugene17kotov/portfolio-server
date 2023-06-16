const express = require('express');
const router = express.Router();
const ctrlWrapper = require('../ctrlWrapper.js');
const contactController = require('../contactController.js');

// wake up route for cron
router.get('', (req, res) => {
    return res.status(200).send('I am not sleeping!');
});

router.post('/contact', ctrlWrapper(contactController));

module.exports = router;
