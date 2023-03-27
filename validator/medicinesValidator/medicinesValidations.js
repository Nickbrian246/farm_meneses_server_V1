const {check} = require('express-validator');
const {validateResults} = require("../../utils/handleValidator");

const validationMedicines = [
    check("name").exists().notEmpty(),
    check("compound").exists().notEmpty(),
    check("price").exists().notEmpty(),
    check("type").exists().notEmpty(),
    check("quantity").exists().notEmpty(),
    check("function").exists().notEmpty(),
    check("imgId").exists().notEmpty(),
    check("id").exists().notEmpty(),
    (req, res, next) =>{
        return validateResults(req, res, next)
    }
]

module.exports = {validationMedicines}