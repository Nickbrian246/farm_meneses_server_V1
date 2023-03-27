const  {check} =require("express-validator");
const {validateResults} = require("../../utils/handleValidator")

const medicImgValidator = () =>{
check("url").exists().isString(),
check("fileName").exists().isString(),

(req,res,next) =>{
    return  validateResults(req,res,next)
}

};

module.exports = {medicImgValidator}