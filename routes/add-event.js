const express = require('express');

const events = []
const router = express.Router();

router.get('/add-event', (req, res, next) => {
    res.render('add-event.ejs', {
        pageTitle: 'Add Event',
        path: '/admin/add-event'
    });
});

router.post('/add-event', (req, res, next) => {    
    products.push( {title: req.body.title});
    res.redirect('/');
});

exports.router = router;
exports.events = events;