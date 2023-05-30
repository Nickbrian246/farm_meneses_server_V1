const express = require("express")
const router = express.Router()
const {checkRol} = require("../../middleware/rol")
const {authMiddleware} = require("../../middleware/session")
const {getProductByName} = require("../../controllers-V2/inputDynamicSearchByNameController/inputDynamicByNameController")
const {validatorByName} = require("../../validator/validatorByName")


router.get("/:name",authMiddleware,checkRol(["admin","master"]),validatorByName,getProductByName)

module.exports = router