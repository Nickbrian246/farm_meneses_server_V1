const {Sales} = require("../../models-v2")
const {handlehttpErros} = require("../../utils/handlehttpsErrors")

// format day/month/year
// esto es para crear 
const today = new Date();
const formattedDate = `${today.getFullYear()}/${today.getMonth() + 1}/${today.getDate()}`;
console.log(formattedDate)// 2023/5/20

// este controlador
// se encarga de buscar un schema existente 
// para la fecha de no encontrarlo crea uno nuevo 
// con el parametro de fecha actual y clientID 
const createSale= async(req,res) => {
  try {
    const {body}= req
    const {clientId}= body
    const findIt= await Sales.findOne({clientId,date:formattedDate}) // busca con forme a fecha y clientID
    if (!findIt) { // si no lo encuentra crea uno nuevo con la fecha de hoy y con el id del cliente
      const newSaleModel= await Sales.create(body)
      res.send({data:newSaleModel})
      return 
    }
    const data= await Sales.create(body)
    res.send({data})
  } catch (error) {
    handlehttpErros(res,`error en getproduct ${error}`,400)
  }
}
const getSale= async(req,res) => {
  try {
    const {client,date}= req.body
    const data=  await Sales.find({date, client})
    res.send({data})
    
  } catch (error) {
    handlehttpErros(res,`error en getSale ${error}`,400)
  }
}
const getSales= async(req,res) => {
  try {
    const {client}= req.body
    const data= await Sales.find({client})
    res.send({data})
  } catch (error) {
    
  }
}
const updateOrCreateSale= async(req,res) => {
  try {
    const {body}=req
    const {date,client}=body

    const updated = await Sales.findOneAndUpdate(
      { client,date},
      { $push: { salesOfTheDay: { $each: body.salesOfTheDay } } },
      { new: true }
    );
    if(updated===null){
      const create= await Sales.create(body)
      console.log(create)
      res.send({data:create})
      return 
    }
    res.send({ data: updated });

  } catch (error) {
    handlehttpErros(res, `Error en getproduct ${error}`, 400);
  }
}
 
const deleteSale= async(req,res) => {
  try {
    const {id}= req.params
    const data= await Sales.deleteOne({_id:id})
    res.send({data})
  } catch (error) {
    handlehttpErros(res,`error en getproduct ${error}`,400)
  }
}
module.exports= {
createSale,
deleteSale,
getSale,
getSales,
updateOrCreateSale
}