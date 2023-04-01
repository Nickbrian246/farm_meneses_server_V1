const express= require("express");
const router =express.Router();
const {saleValidator} = require("../../validator/saleValidator/saleValidator")
const {
    createSale,
    deleteSale,
    getSaleById,
    getSales,
} = require("../../controllers/saleControllers/saleController")



router.post("/",saleValidator,createSale)
router.get("/:id",getSaleById)
router.get("/",getSales)
router.delete("/:id",deleteSale)

module.exports = router;
