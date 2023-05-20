const express= require("express")
const router= express.Router()
const {
createProduct,
deleteProduct,
getProduct,
getProducts,
updateProduct,}= require("../../controllers-V2/salesController/saleController")


router.get("/",getProducts)
router.get("/:id",getProduct)
router.post("/",createProduct)
router.put("/:id",updateProduct)
router.delete("/:id",deleteProduct)

module.exports= router