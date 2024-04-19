const express = require('express');
const assignmentController = require('../controllers/assignment.controller');
const { authentificationMiddlware } = require('../middleware/authentification.middleware');
const router = express.Router();

router.use(authentificationMiddlware);

router.get('/:id', assignmentController.getAssignmentById);
router.post('/add', assignmentController.addAssignment);
router.delete('/delete', assignmentController.deleteAssignement);
router.put('/rendu', assignmentController.setAssignmentRendu);

router.get('/', assignmentController.getAllAssignment);


module.exports = router;