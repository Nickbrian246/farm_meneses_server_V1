const {handlehttpErros} = require("../../utils/handlehttpsErrors");
const {matchedData} = require("express-validator");
const {cartList} =require("../../models")


const createList=  async( req, res) => {
    try {
        const body = matchedData(req)
        const data =  await cartList.create(body)
        res.send({data})
    } catch (error) {
        console.log(error)
        handlehttpErros(res,`error de ${error}`, 400)
    }
};
const getList = async (req, res) =>{
try {
    const data = await  cartList.find({});
    res.send({data})
    
} catch (error) {
    handlehttpErros(res,"error en get medicines de medicines", 400)
}
}
const getListById = async (req, res) =>{
    try {
        req = matchedData(req)
        const {id} = req
        const data = await cartList.findById(id)
        if(data=== null) return res.send({data:"elemenento no encontrado o ha sido eliminado"})
        res.send({data})
        
    } catch (error) {
        handlehttpErros(res,"error en get medicines  by id de medicines", 400)
    }
}
const updateAllMedicineProperties= async (req, res) =>{
    try {
        const {id,...body} =  matchedData(req);
        const data = await cartList.findOneAndUpdate(id, body)
        res.send({data})

    } catch (error) {
        console.log(error)
        handlehttpErros(res,"error en update ALLproperties medicines de medicines", 400)
    }
}
// const updateMedicineByProperty = async (req, res) =>{
//     try {
//         const {id,...body} = req;
//         const data = await cartList.findOneAndUpdate(id,body);
//         res.send({data})
        
//     } catch (error) {
//         console.log(error)
//         handlehttpErros(res,"error en update medidicnes by properti medicines de medicines", 400)
//     }
// }
const deleteMedicines = async (req, res) =>{
    try {
        req = matchedData(req);
        const {id} = req;
        const data = await cartList.deleteOne({_id:id})
        res.send({data})
    } catch (error) {
        console.log(error)
        handlehttpErros(res,"error en delete medicines de medicines", 400)
    }
}

module.exports= {
    createItem,
    getMedicines,
    getMedicinesById,
    updateAllMedicineProperties,
    deleteMedicines
    
};