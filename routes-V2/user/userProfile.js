const express = require("express");
const router = express.Router()
const {getProfileDetails} = require("../../controllers-V2/user/userController")
const {authMiddleware} = require("../../middleware/session")

router.get("/",authMiddleware,getProfileDetails)
module.exports = router