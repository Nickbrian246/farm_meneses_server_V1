const express = require("express")
const router = express.Router()
const {getProductByName} = require("../../controllers-V2/inputDynamicSearchByNameController/inputDynamicByNameController")
const {validatorByName} = require("../../validator/validatorByName")


router.get("/:name",validatorByName,getProductByName)

module.exports = router