const express = require("express");
const router = express.Router();
const {
    createItem,
    deleteMedicines,
    getMedicines,
    getMedicinesById,
    updateAllMedicineProperties,
} = require("../../controllers/medicControllers/medicines");
const {validationMedicines} = require("../../validator/medicinesValidator/medicinesValidations");
const {validationById} = require("../../validator/validatorById")

router.post("/",validationMedicines,createItem)
router.get("/",getMedicines)
router.get("/:id",validationById,getMedicinesById)
router.put("/:id",validationById,validationMedicines,updateAllMedicineProperties)
// router.patch("/:id",validationById,updateMedicineByProperty)
router.delete("/:id",validationById,deleteMedicines)

module.exports = router