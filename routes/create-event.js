const express = require('express');

const eventsController = require('../controllers/events');

const router = express.Router();

router.get('/create-event', eventsController.getCreateEvent);
router.post('/create-event', eventsController.postCreateEvent);

module.exports = router;