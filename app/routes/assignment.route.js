const express = require('express');
const assignmentController = require('../controllers/assignment.controller');
const { authentificationMiddlware } = require('../middleware/authentification.middleware');
const router = express.Router();

router.use(authentificationMiddlware);

// GET aal assignments
router.get('/', assignmentController.getAllAssignment);


module.exports = router;