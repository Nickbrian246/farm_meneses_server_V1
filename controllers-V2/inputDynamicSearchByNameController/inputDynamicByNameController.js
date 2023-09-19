const express= require("express")
const router = express.Router()
const {productStock}= require("../../models-v2")
const {handlehttpErros}= require("../../utils/handlehttpsErrors")

const getProductByName= async (req,res) => {
  try {
    const {name} = req.params
    const client = req.user._id
    const productName = name

    const find = await productStock.findOne({client});
    if(!find) {
      handlehttpErros(res, `Ups!!!, paraece que aun no tienes productos en inventario para buscar,
      te invitamos a agregar productos.`, 404);
      return
    }
    const clientStock= find.productsInStock
    const groupOfCoincidences  = clientStock.filter((item)=> {
      return item.name && item.name.toLowerCase().includes(productName);
    })
    if (groupOfCoincidences.length===0){
      return  res.status(404).json({ error: 'producto no encontrado' })
    }else {
      res.send({data:groupOfCoincidences })
    }
  } catch (error) {
    handlehttpErros(res, `error en inputDinamico ${error}`, 404)
  }
}

module.exports= {getProductByName}