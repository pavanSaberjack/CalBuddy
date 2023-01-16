const express = require('express');

const eventsController = require('../controllers/events');

const router = express.Router(); 

router.get('/', eventsController.getEventsList);

module.exports = router;