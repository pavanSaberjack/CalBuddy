const express = require('express');

const eventsController = require('../controllers/events');

const router = express.Router();

router.get('/add-event', eventsController.getAddEvents);
router.post('/add-event', eventsController.postAddEvent);

module.exports = router;