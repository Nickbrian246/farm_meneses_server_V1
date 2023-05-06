const express = require("express")
const router = express.Router()


router.get("/:id")
router.put("/:id")
router.post("/")
router.delete("/:id")

module.exports = router