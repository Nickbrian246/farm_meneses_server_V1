const {Sales,productStock} = require("../../models-v2")
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
    const client=req.user._id
    const findIt= await Sales.findOne({client,date:formattedDate}) // busca con forme a fecha y clientID
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
    const {date}= req.params
    console.log(date)
    const client=req.user._id
    console.log(client) 
    const data=  await Sales.find({date, client})
    console.log(data)
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
/**
 * al memento de crear una venta o hacer una venta
 * la funcion updateOrCreate tambien va a 
 * restar en el stock los elmentos vendidos 
 */
const updateOrCreateSale= async(req,res) => {
  try {
    const {body}=req
    const {date}=body
    const client=req.user._id

    const find = await productStock.findOne( { client } )
    console.log(body)


    const clientStock= find.productsInStock
    const sales= body.salesOfTheDay
    let error = false
    /**
     *actualiza el stock en funcion de la lista de productos que recibe
    */
    const updatedStock = clientStock.map((itemStock) => {
      const foundItem = sales.find((itemSale) => itemSale.name === itemStock.name);
      if (foundItem) {
        const updatedQuantity = itemStock.quantity - foundItem.quantity;
        if(updatedQuantity< 0) {
          error = true
          return res
          .status(400)
          .send({ 
            error:`no se pueden realizar la venta debido a que no se cuentan con suficientes articulos en stock del producto ${foundItem.name}`
          });
        }
        return {
          ...itemStock,
          quantity: updatedQuantity >= 0 ? updatedQuantity : 0
        };
      } else {
        return itemStock;
      }
    });
    if(error){
      return;
    }
    find.productsInStock= updatedStock
    const updatedProductStock= await find.save()// guarda esos cambias en es modelo 
  /**
   * updated si existe ya un registro de ventas para el dia de hoy 
   * lo actualiza metiendo los nuevos productos vendidos 
   * no limpia repetidos 
   */
    const updated = await Sales.findOneAndUpdate(
      { client,date},
      { $push: { salesOfTheDay: { $each: body.salesOfTheDay } } },
      { new: true }
    );
      /**
       * si no existe un registro para la fecha proporcionada 
       * crea uno nuevo 
       */
    if(updated===null){
      const adaptingClientToString= String(client)
      const addingClient= {...body,client:adaptingClientToString}

      const create= await Sales.create(addingClient)
      console.log(create)
      res.send({data:create})
      return 
    }

    /**
     * si updated existe entonces envia el updated actualizado como respuesta 
     */
    res.send({ data: updated });

  } catch (error) {
    handlehttpErros(res, `Error en getproduct ${error}`, 400);
  }
}

const deleteSale= async(req,res) => {
  try {
    const client=req.user._id
    const data= await Sales.deleteOne({_id:client})
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