const express = require('express');

const invitesController = require('../controllers/invites');

const router = express.Router();

router.get('/create-invite', invitesController.getCreateInvite);
router.post('/create-invite', invitesController.postCreateInvite);

module.exports = router;