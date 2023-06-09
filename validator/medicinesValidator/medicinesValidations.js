const {check} = require('express-validator');
const {validateResults} = require("../../utils/handleValidator");

const validationMedicines = [
    check("name").exists().notEmpty().isString(),
    check("compound").exists().notEmpty(),
    check("price").exists().notEmpty(),
    check("type").exists().notEmpty(),
    check("quantity").exists().notEmpty(),
    check("function").exists().notEmpty(),
    check("imgId").isString(),
    (req, res, next) =>{
        return validateResults(req, res, next)
    }
]
const validationGetMedicineByName = [
    check("name").exists().notEmpty().isString(),
    (req, res, next) =>{
        return validateResults(req, res, next)
    }
]

module.exports = {
    validationMedicines,
    validationGetMedicineByName}