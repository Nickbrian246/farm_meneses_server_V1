const {matchedData} = require("express-validator");
const {saleModel} = require("../../models");
const  {handlehttpErros} = require("../../utils/handlehttpsErrors")


const createSale = async (req,res) => {
    try {
        const body = req.body
        const data = await saleModel.create(body);
        
        res.send({data})
    } catch (error) {
        console.log(error)
        handlehttpErros(res,"error en sales ", 402)
    }
}
const getSaleById = async (req,res) => {
    try {
        const {id} =req.params
        const data = await saleModel.findById(id);
        if (data === null)  return res.send({data:"elemento no encontrado o previamente eliminado"})
        res.send({data})
    } catch (error) {
        handlehttpErros(res,"error en sales ", 402)
    }
}
const getSales = async (req,res) => {
    try {
        const data = await saleModel.find({})
        res.send({data})
    } catch (error) {
        handlehttpErros(res,"error en sales ", 402)
    }
}
const deleteSale = async (req,res) => {
    try {
        const {id} = req.params
        const data = await saleModel.deleteOne({_id:id})
        res.send({data})
        
    } catch (error) {
        console.log(error)
        handlehttpErros(res,"error en sales ", 402)
    }
}

module.exports=  {
    createSale,
    deleteSale,
    getSaleById,
    getSales
}