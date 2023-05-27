const {productStock} = require("../../models-v2")
const {handlehttpErros} = require("../../utils/handlehttpsErrors")

const getStockItem= async(req,res) => {
  try {
    const {client}= req.body
    const data=  await productStock.findOne({client})
    res.send({data})
    
  } catch (error) {
    handlehttpErros(res,`error en obtener producto ${error}`,400)
  }
}
const modifyItemInStock= async(req,res) => {
  try {
    const { client, modifyItem } = req.body;
    const foundProductStock = await productStock.findOne({ client });

    if (!foundProductStock) {
      return res.status(404).json({ error: 'producto no encontrado' });
    }

    const modifiedProducts = foundProductStock.productsInStock.map((item) => {
      if (item.name === modifyItem.name) {
        return { ...item, ...modifyItem };
      }
      return item;
    });

    foundProductStock.productsInStock = modifiedProducts;
    const updatedProductStock = await foundProductStock.save();

    res.json({ data: updatedProductStock });
  } catch (error) {
    handlehttpErros(res, `Error in modifyItemInStock: ${error}`, 400);
  }
}
const deleteStockItem= async(req,res) => {
  try {
    const {
      client,
      elementToBeDelete,
    }= req.body
    const foundProductStock= await productStock.findOne({client})

    if(!foundProductStock){
      res.status(404).json({error:"producto no encontrado"})
    }

    const deletingItem= foundProductStock.productsInStock.filter((item)=>{
      return item.name!==elementToBeDelete.name
    })
  
    foundProductStock.productsInStock= deletingItem;
    const updatedProductStock= await foundProductStock.save()

    res.send({data:updatedProductStock})
  } catch (error) {
    handlehttpErros(res,`error en delete Product ${error}`,400)
  }
}

module.exports = {
  getStockItem,
  modifyItemInStock,
  deleteStockItem,
}