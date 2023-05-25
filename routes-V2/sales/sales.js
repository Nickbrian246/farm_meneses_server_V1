const express= require("express")
const router= express.Router()
const {
createSale,
deleteSale,
getSale,
getSales,
updateOrCreateSale}= require("../../controllers-V2/salesController/saleController")


router.get("/",getSales)
// esta ruta se encargara de obtener la ruta en base a la fecha
router.get("/",getSale)
router.post("/",createSale)
// put se encargara de buscar y en caso de no entrar crear un nuevo modelo de venta para la fecha de dia presente
router.put("/",updateOrCreateSale)
router.delete("/:id",deleteSale)

module.exports= router