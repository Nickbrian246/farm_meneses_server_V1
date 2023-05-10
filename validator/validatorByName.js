const {check}= require("express-validator")
const {validateResults} = require("../utils/handleValidator")

const validatorByName= [

  check("name").exists().isString(),

  (req,res,next) => {
    return validateResults(req,res,next)
  }
]
module.exports= {validatorByName}