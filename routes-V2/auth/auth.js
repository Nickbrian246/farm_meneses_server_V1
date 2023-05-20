const express = require("express")
const router = express.Router()
const{registerUser,loginUser} = require("../../controllers-V2/auth/authController")
const {registerValidator,LogInValidator} = require("../../validator/authValidator/registerValidator")

router.post("/register",registerValidator,registerUser)
router.get("/logIn",LogInValidator,loginUser)


module.exports= router