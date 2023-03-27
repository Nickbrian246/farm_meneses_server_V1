const express = require("express");
const router = express.Router();
const {createItem} = require("../../controllers/medicControllers/medicines");
const {validationMedicines} = require("../../validator/medicinesValidator/medicinesValidations");

router.post("/",validationMedicines,createItem)

module.exports = router