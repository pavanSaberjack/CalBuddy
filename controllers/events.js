const events = []

exports.getAddEvents = (req, res, next) => {
    res.render('add-event.ejs', {
        pageTitle: 'Add Event',
        path: '/add-event'
    });
};

exports.postAddEvent = (req, res, next) => {    
    events.push( {title: req.body.title});
    res.redirect('/');
};

exports.getEventsList = (req, res, next) => {
    res.render('event-list.ejs', { 
        pageTitle: 'My events',
        eventList: events,
        path: '/'
     });
};