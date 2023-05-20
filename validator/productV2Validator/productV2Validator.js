const {check} = require("express-validator")
const {validateResults} = require("../../utils/handleValidator");

const ProductV2Validation= [
  check("name").isString().exists().notEmpty(),
  check("price").isNumeric().notEmpty().exists(),
  check("quantity").isNumeric().notEmpty().exists(),
  check("compound").isString().optional(),
  check("tag").isString().exists().notEmpty(),
  check("whatIsItFor").isString().optional(),
  check("size").isString().optional(),
  check("brand").isString().optional(),
  check("pieces").isNumeric().optional().notEmpty().exists(),
  (req, res,next) => {
    return validateResults(req, res,next)
  }
]

module.exports= {ProductV2Validation}