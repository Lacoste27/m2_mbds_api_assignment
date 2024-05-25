const express = require('express');
const userController = require('../controllers/user.controller');
const { authentificationMiddlware } = require('../middleware/authentification.middleware');
const { adminMiddleware } = require('../middleware/admin.middleware');

const router = express.Router();

router.use(authentificationMiddlware);

// GET user details
router.get('/:id/profile', userController.getUserById);
router.get('/:id/assignments', userController.getUserAssignment);
router.get('/students', userController.getAllStudent);

router.use(adminMiddleware);

router.get('/', userController.getAllUser);



module.exports = router;