const {check} = require("express-validator");
const {validateResults} = require("../../utils/handleValidator");

const saleValidator = [
    check("products").exists().notEmpty().isArray(),
    check("date").exists().notEmpty().isDate(),
    check("total").exists().notEmpty().isNumeric(),

    (res,req,next) => {
        return validateResults(req,res,next);
        
    }
];

module.exports = { saleValidator}