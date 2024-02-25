const express = require("express");
const router = express.Router();
const { checkAuth } = require("../../../middleware/authMiddlewar");
const patientController = require("../../../controllers/patientController");

router.post("/register", checkAuth, patientController.registerPatient);

router.post("/:id/create-report", checkAuth, patientController.createReport);

router.get("/:id/all-report", patientController.allReport);

module.exports = router;