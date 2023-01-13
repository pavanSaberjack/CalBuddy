const Invite = require('../models/invite');

exports.getCreateInvite = (req, res, next) => {
    res.render('calendar/create-invite.ejs', {
        pageTitle: 'Add Event',
        path: '/create-invite'
    });
};

exports.postCreateInvite = (req, res, next) => {  
    const event = new Invite(req.body.title);
    event.save();
    res.redirect('/');
};

exports.getInvitesList = (req, res, next) => {
    const invites = Invite.fetchAll();
    res.render('calendar/invites-list.ejs', { 
        pageTitle: 'My Invites',
        eventList: invites,
        path: '/'
     });
};