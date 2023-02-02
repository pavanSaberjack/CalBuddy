const express = require('express');

const eventsController = require('../controllers/events');

const router = express.Router(); 

// router.get('/', eventsController.getEventsList);

router.use('/',(request, response, next) => {

    let action = request.body.action;
    if (action && action === 'delete-event') {
        eventsController.deleteEvent(request, response, next);
    } else {
        eventsController.getEventsList(request, response, next);
    }
});

router.get('/events', eventsController.getEventsDetail);

module.exports = router;