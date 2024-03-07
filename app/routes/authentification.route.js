const express = require('express');
const router = express.Router();

const authentificationController = require('../controllers/authentification.controller');

// authentification route
router.post('/signin', authentificationController.authenticateUser);

module.exports = router;