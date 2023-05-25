const {productStock} = require("../../models-v2")
const {handlehttpErros} = require("../../utils/handlehttpsErrors")


const getProduct= async(req,res) => {
  try {
    const {id}= req.params
    const data=  await productStock.findById(id)
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
    const data= await productStock.findOneAndUpdate(
      {client:client},
      { $push: { salesOfTheDay: { $each: body.salesOfTheDay } } },
      { new: true,upsert: true  }
    )
    res.send({data})
  } catch (error) {
    handlehttpErros(res,`error en getproduct ${error}`,400)
  }
}
const deleteProduct= async(req,res) => {
  try {
    const {id}= req.params
    const data= await productStock.deleteOne({_id:id})
    res.send({data})
  } catch (error) {
    handlehttpErros(res,`error en getproduct ${error}`,400)
  }
}
module.exports= {
  updateOrCreateProduct,
  deleteProduct,
  getProduct,

}