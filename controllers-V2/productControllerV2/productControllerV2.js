const {productModelV2} = require("../../models-v2")
const {handlehttpErros} = require("../../utils/handlehttpsErrors")


const getProduct= async(req,res) => {
  try {
    const {id}= req
    const data=  await productModelV2.findById(id)
    res.send({data})
    
  } catch (error) {
    handlehttpErros(res,`error en getproduct ${error}`,400)
  }
}
const getProducts= async(req,res) => {
  try {
    const data= await productModelV2.find({})
    res.send({data})
  } catch (error) {
    
  }
}
const createProduct= async(req,res) => {
  try {
    const {body}= req
    const data= await productModelV2.create(body)
    res.send({data})
  } catch (error) {
    handlehttpErros(res,`error en getproduct ${error}`,400)
  }
}
const updateProduct= async(req,res) => {
  try {
    const {id}= req.params;
    const{body} = req;
    const data= await productModelV2.findByIdAndUpdate(id,body)
    res.send({data})
  } catch (error) {
    handlehttpErros(res,`error en getproduct ${error}`,400)
  }
}
const deleteProduct= async(req,res) => {
  try {
    const {id}= req.params
    const data= await productModelV2.deleteOne({_id:id})
    res.send({data})
  } catch (error) {
    handlehttpErros(res,`error en getproduct ${error}`,400)
  }
}
module.exports= {
  createProduct,
  deleteProduct,
  getProduct,
  getProducts,
  updateProduct,

}