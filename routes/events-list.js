const express = require('express');

const eventsController = require('../controllers/events');

const router = express.Router(); 

router.use((request, response, next) => {
    console.log(request.url);
    next();
});

router.get('/', eventsController.getEventsList);

router.post('/delete-event', eventsController.deleteEvent);

router.get('/events', eventsController.getEventsDetail);

module.exports = router;