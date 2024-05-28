const express = require("express");
const assignmentController = require("../controllers/assignment.controller");
const {
  authentificationMiddlware,
} = require("../middleware/authentification.middleware");
const router = express.Router();

router.use(authentificationMiddlware);

/**
 * @swagger
 * /assignments/{id}:
 *   get:
 *     summary: Get the assignment by id
 *     tags: [Assignments]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The assignment id
 */
router.get("/:id", assignmentController.getAssignmentById);

/**
 * @swagger
 * /assignments/delete:
 *   delete:
 *     summary: Delete assignment
 *     tags: [Assignments]
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 */

router.delete("/:id", assignmentController.deleteAssignement);
router.put("/:id", assignmentController.updateAssignment);
router.patch("/:id", assignmentController.setAssignmentRendu);

/**
 * @swagger
 * /assignments/add:
 *   post:
 *     summary: Add new assignment
 *     tags: [Assignments]
 */
router.post("/add", assignmentController.addAssignment);

/**
 * @swagger
 * /assignments:
 *   get:
 *     summary: Get all assignments
 *     tags: [Assignments]
 */
router.get("/", assignmentController.getAllAssignment);

module.exports = router;
