const  {check} =require("express-validator");
const {validateResults} = require("../../utils/handleValidator")

const registerValidator =[
    check("name").exists().isString().notEmpty(),
    check("age").exists().isNumeric().notEmpty(),
    check("state").exists().isString().notEmpty(),
    check("email").exists().isString().notEmpty().isEmail(),
    check("password").exists().isString().notEmpty(),
    check("role").exists().isString().notEmpty(),

    (req,res,next) =>{
        return  validateResults(req,res,next)
    }

];

const LogInValidator =[
check("email").exists().isString().notEmpty().isEmail(),
check("password").exists().isString().notEmpty(),

(req,res,next) =>{
    return  validateResults(req,res,next)
}

];

module.exports = {registerValidator,LogInValidator}