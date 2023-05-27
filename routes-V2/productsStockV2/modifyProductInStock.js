const express= require("express")
const router= express.Router()
const {ProductV2Validation} = require("../../validator/productV2Validator/productV2Validator");
const {validationById}= require("../../validator/validatorById");
const {
deleteStockItem,
getStockItem,
modifyItemInStock
} = require("../../controllers-V2/productStockV2/modifyProductoInStock")


router.get("/",getStockItem)
router.put("/",modifyItemInStock)
router.delete("/",deleteStockItem)

module.exports= router