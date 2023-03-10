const express = require('express');

const userController = require('../controllers/user');

const router = express.Router(); 

router.get('/profile', userController.getUserProfile);

module.exports = router;