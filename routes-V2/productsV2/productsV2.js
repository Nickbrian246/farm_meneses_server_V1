const express= require("express")
const router= express.Router()
const {ProductV2Validation} = require("../../validator/productV2Validator/productV2Validator");
const {validationById}= require("../../validator/validatorById");
const {
  deleteProduct,
  getProduct,
  updateOrCreateProduct

} = require("../../controllers-V2/producStockV2/productStockControllerV2")


router.get("/:id",validationById,getProduct)
router.put("/",updateOrCreateProduct)
router.delete("/:id",deleteProduct)

module.exports= router