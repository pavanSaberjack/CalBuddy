const Event = require('../models/event');

exports.getCreateEvent = (req, res, next) => {
    res.render('calendar/create-event.ejs', {
        pageTitle: 'Add Event',
        path: '/create-event'
    });
};

exports.postCreateEvent = (req, res, next) => {  
    const event = new Event(req.body.title);
    event.save();
    res.redirect('/');
};

exports.getEventsList = (req, res, next) => {
    Event.fetchAll((events) => {
        res.render('calendar/events-list.ejs', { 
            pageTitle: 'My Events',
            eventList: events,
            path: '/'
         });
    });
};