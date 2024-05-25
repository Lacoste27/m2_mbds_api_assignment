const express = require("express");
const matiereController = require("../controllers/matiere.controller");
const {
  authentificationMiddlware,
} = require("../middleware/authentification.middleware");
const router = express.Router();
router.get("/", matiereController.getAllMatiere);
// router.use(authentificationMiddlware);



module.exports = router;