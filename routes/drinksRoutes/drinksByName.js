const express = require("express")
const router = express.Router();
const {validationGetMedicineByName} = require("../../validator/medicinesValidator/medicinesValidations")
const {
getDrinksByName} = require("../../controllers/drinksController/drinksByName")



router.get("/:name",getDrinksByName)


module.exports = router