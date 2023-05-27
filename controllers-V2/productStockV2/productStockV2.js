const {productStock} = require("../../models-v2")
const {handlehttpErros} = require("../../utils/handlehttpsErrors")


const getProduct= async(req,res) => {
  try {
    const {client}= req.body
    const data=  await productStock.findOne({client})
    res.send({data})
    
  } catch (error) {
    handlehttpErros(res,`error en getproduct ${error}`,400)
  }
}
const updateOrCreateProduct= async(req,res) => {
  try {
    
    const{body} = req;
    const {client}= body
    console.log(client);
    // await productStock.collection.dropIndex('clientId_1');
    const data= await productStock.findOneAndUpdate(
      {client:client},
      { $push: { productsInStock: { $each: body.productsInStock } } },
      { new: true, upsert: true }
    )
    res.send({data})
  } catch (error) {
    handlehttpErros(res,`error en updateOrCreateProduct ${error}`,400)
  }
}
const deleteProduct= async(req,res) => {
  try {
    const {client}= req.body
    const data= await productStock.deleteOne({client})
    res.send({data})
  } catch (error) {
    handlehttpErros(res,`error en delete Product ${error}`,400)
  }
}
module.exports= {
  updateOrCreateProduct,
  deleteProduct,
  getProduct,
}