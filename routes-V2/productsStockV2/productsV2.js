const express= require("express")
const router= express.Router()
const {ProductV2Validation} = require("../../validator/productV2Validator/productV2Validator");
const {validationById}= require("../../validator/validatorById");
const {
  deleteProduct,
  getProduct,
  updateOrCreateProduct

} = require("../../controllers-V2/productStockV2/productStockV2")


router.get("/",getProduct)
router.put("/",updateOrCreateProduct)
router.delete("/",deleteProduct)

module.exports= router