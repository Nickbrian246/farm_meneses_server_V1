const express= require("express")
const router= express.Router()
const {authMiddleware}= require("../../middleware/session")
const {checkRol}= require("../../middleware/rol")
const {ProductV2Validation} = require("../../validator/productV2Validator/productV2Validator");
const {validationById}= require("../../validator/validatorById");
const {
  deleteProduct,
  getProduct,
  updateOrCreateProduct
} = require("../../controllers-V2/productStockV2/productStockV2")
// estas rutas son para crear o meterle mas productos al unico stock por cliente
//pedemos leer, crear o actualizar 
//o eliminar un stock completo 

router.get("/",authMiddleware,checkRol(["admin","master"]),getProduct)
router.put("/",authMiddleware,checkRol(["admin","master"]),updateOrCreateProduct)
router.delete("/",authMiddleware,checkRol(["admin","master"]),deleteProduct)

module.exports= router