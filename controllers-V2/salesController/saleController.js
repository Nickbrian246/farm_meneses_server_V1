const {Sales} = require("../../models-v2")
const {handlehttpErros} = require("../../utils/handlehttpsErrors")

// format day/month/year
const today = new Date();
const formattedDate = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;
console.log(formattedDate)// 20/5/2023

const getProduct= async(req,res) => {
  try {
    const {id}= req.params
    const data=  await Sales.findById(id)
    res.send({data})
    
  } catch (error) {
    handlehttpErros(res,`error en getproduct ${error}`,400)
  }
}
const getProducts= async(req,res) => {
  try {
    const data= await Sales.find({})
    res.send({data})
  } catch (error) {
    
  }
}
const createProduct= async(req,res) => {
  try {
    const {body}= req
    const data= await Sales.create(body)
    res.send({data})
  } catch (error) {
    handlehttpErros(res,`error en getproduct ${error}`,400)
  }
}
const updateProduct= async(req,res) => {
  try {
    const {id}= req.params;
    const{body} = req;
    const data= await Sales.findByIdAndUpdate(id,body)
    res.send({data})
  } catch (error) {
    handlehttpErros(res,`error en getproduct ${error}`,400)
  }
}
const deleteProduct= async(req,res) => {
  try {
    const {id}= req.params
    const data= await Sales.deleteOne({_id:id})
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