const express = require("express");
const router= express.Router()
const {createImgMedecine,getImgMedecine} = require("../../controllers/storage/storage");
const {medicImgValidator} = require("../../validator/medicImgValidator/medicImgValidator")
const {uploadMiddleware} = require("../../utils/handleStorage")

router.post("/",uploadMiddleware.single("myfile"),createImgMedecine);
router.get("/:id",getImgMedecine)
module.exports= router