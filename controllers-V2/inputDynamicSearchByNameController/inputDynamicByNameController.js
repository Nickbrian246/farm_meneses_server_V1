const express= require("express")
const router = express.Router()
const {productStock}= require("../../models-v2")
const {handlehttpErros}= require("../../utils/handlehttpsErrors")

const getProductByName= async (req,res) => {
  try {
    const {name} = req.params
    const client = req.user._id
    const productName = name
  

    const find = await productStock.findOne({client})
  
    const clientStock= find.productsInStock
    const productFound = clientStock.filter((item)=> {
      return item.name && item.name.includes(productName);
      // return item.name.includes(productName)
    })
    // const data= (await productStock.findOne({client})).filter((item) => {

    //   return item.productsInStock.name.includes(productName)
    // })
    if (productFound.length===0){
      return  res.status(404).json({ error: 'producto no encontrado' })
    }else {
      res.send({data:clientStock})
    }
  } catch (error) {
    handlehttpErros(res, `error en inputDinamico ${error}`, 404)
  }
}

module.exports= {getProductByName}