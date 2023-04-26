const express = require("express")
const router = express.Router();
const {validationGetMedicineByName} = require("../../validator/medicinesValidator/medicinesValidations")
const {
deleteMedicineByName,
getMedicinesByName,
updateMedcineByName} = require("../../controllers/medicControllers/medicinesByName")



router.get("/:name",validationGetMedicineByName,getMedicinesByName)
router.put("/:name",updateMedcineByName)
router.delete("/name",deleteMedicineByName)
// router.patch("/:id",validationById,updateMedicineByProperty)

module.exports = router