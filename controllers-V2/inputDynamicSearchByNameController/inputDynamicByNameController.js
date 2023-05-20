const express= require("express")
const router = express.Router()
const {productStock}= require("../../models-v2")

const getProductByName= async (req,res) => {
  try {
    const {name} = req.params
    const data= (await productStock.find({})).filter((item) => {
      return item.name.includes(name)
    })
    res.send({data})
  } catch (error) {
    
  }
}

module.exports= {getProductByName}