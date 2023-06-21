const express= require("express")
const router= express.Router()
const {checkRol} = require("../../middleware/rol")
const {authMiddleware} = require("../../middleware/session")
const {getReports} = require("../../controllers-V2/reports/reportsWeekly")





router.post("/", authMiddleware, checkRol(["admin","master"]),getReports)

module.exports = router