const express = require('express');
const userController = require('../controllers/user.controller');
const { authentificationMiddlware } = require('../middleware/authentification.middleware');
const router = express.Router();

router.use(authentificationMiddlware);

// GET user details
router.get('/:id/profile', userController.getUserById);


module.exports = router;