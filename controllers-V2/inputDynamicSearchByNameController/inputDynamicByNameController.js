const express= require("express")
const router = express.Router()
const {productStock}= require("../../models-v2")

const getProductByName= async (req,res) => {
  try {
    const {client, productName} = req.body

    const find = await productStock.findOne({client})
    const clientStock= find.productsInStock
    const productFound = clientStock.filter((item)=> {
      return item.name.includes(productName)
    })
    // const data= (await productStock.findOne({client})).filter((item) => {

    //   return item.productsInStock.name.includes(productName)
    // })
    if (productFound.length===0){
      return  res.status(404).json({ error: 'producto no encontrado' })
    }else {
      res.send({data:productFound})
    }
  } catch (error) {
    
  }
}

module.exports= {getProductByName}