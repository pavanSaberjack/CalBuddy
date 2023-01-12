const Event = require('../models/event');

exports.getAddEvents = (req, res, next) => {
    res.render('add-event.ejs', {
        pageTitle: 'Add Event',
        path: '/add-event'
    });
};

exports.postAddEvent = (req, res, next) => {  
    const event = new Event(req.body.title);
    event.save();
    res.redirect('/');
};

exports.getEventsList = (req, res, next) => {
    const events = Event.fetchAll();
    res.render('event-list.ejs', { 
        pageTitle: 'My events',
        eventList: events,
        path: '/'
     });
};