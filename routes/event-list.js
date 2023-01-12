const express = require('express');

const router = express.Router();

const addEventData = require('./add-event');

router.get('/', (req, res, next) => {
    res.render('event-list.ejs', { 
        pageTitle: 'My events',
        prods: addEventData.events,
        path: '/'
     });
});

module.exports = router;