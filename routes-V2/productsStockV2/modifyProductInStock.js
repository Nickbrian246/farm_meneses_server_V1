const express= require("express")
const router= express.Router()
const {authMiddleware} = require("../../middleware/session")
const {checkRol} = require("../../middleware/rol")
const {ProductV2Validation} = require("../../validator/productV2Validator/productV2Validator");
const {validationById}= require("../../validator/validatorById");
const {
deleteStockItem,
getStockItem,
modifyItemInStock
} = require("../../controllers-V2/productStockV2/modifyProductoInStock")
/** 
 * estas  rutas son para 
 * modificar elemnentos del stock ya existentes
 * es decir un patch
 */

router.get("/:id",authMiddleware,checkRol(["admin","master"]),getStockItem)
router.put("/",authMiddleware,checkRol(["admin","master"]),modifyItemInStock)
router.delete("/:id",authMiddleware,checkRol(["admin","master"]),deleteStockItem)

module.exports= router