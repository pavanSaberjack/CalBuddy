const express = require('express');

const invitesController = require('../controllers/invites');

const router = express.Router(); 

router.get('/', invitesController.getInvitesList);

module.exports = router;