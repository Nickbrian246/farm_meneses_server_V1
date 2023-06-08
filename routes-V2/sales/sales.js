const express= require("express")
const router= express.Router()
const {checkRol} = require("../../middleware/rol")
const {authMiddleware} = require("../../middleware/session")
const {
createSale,
deleteSale,
getSale,
getSales,
updateOrCreateSale}= require("../../controllers-V2/salesController/saleController")


// router.get("/:date",authMiddleware,checkRol(["admin","master, employee"]),getSales)
// esta ruta se encargara de obtener la ruta en base a la fecha
router.get("/:date",authMiddleware,checkRol(["admin","master","employee"]),getSale)
router.post("/",authMiddleware,checkRol(["admin","master","employee"]),createSale)
// put se encargara de buscar y en caso de no entrar crear un nuevo modelo de venta para la fecha de dia presente
router.put("/",authMiddleware,checkRol(["admin","master","employee"]),updateOrCreateSale)
router.delete("/:id",authMiddleware,checkRol(["admin","master","employee"]),deleteSale)

module.exports= router