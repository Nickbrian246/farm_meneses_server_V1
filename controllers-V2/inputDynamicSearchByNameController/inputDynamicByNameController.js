const express= require("express")
const router = express.Router()
const {productModelV2}= require("../../models-v2")

const getProductByName= async (req,res) => {
  try {
    const {name} = req.params
    const data= (await productModelV2.find({})).filter((item) => {
      return item.name.includes(name)
    })
    res.send({data})
  } catch (error) {
    
  }
}

module.exports= {getProductByName}