const express= require("express")
const router= express.Router()
const {ProductV2Validation} = require("../../validator/productV2Validator/productV2Validator");
const {validationById}= require("../../validator/validatorById");
const {
  createProduct,
  deleteProduct,
  getProduct,
  getProducts,
  updateProduct,
} = require("../../controllers-V2/productControllerV2/productControllerV2")


router.get("/",getProducts)
router.get("/:id",validationById,getProduct)
router.post("/",ProductV2Validation,createProduct)
router.put("/:id",updateProduct)
router.delete("/:id",deleteProduct)

module.exports= router