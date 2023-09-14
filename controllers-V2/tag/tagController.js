const {productStock} = require("../../models-v2")
const {handlehttpErros} = require("../../utils/handlehttpsErrors")

const getTag= async(req,res) => {
    try {
    const client = req.user._id;
    const { id } = req.params;

    const stockProduct = (await productStock.findOne({ client })).productsInStock;

    const data = stockProduct.find((item) => String(item._id) === id);

    if (data) {
        res.send({ data });
    } else {
        handlehttpErros(res, `No se encontró ningún producto con el ID ${id}`, 404);
    }
    } catch (error) {
    handlehttpErros(res, `Error al obtener el producto: ${error}`, 400);
    }
}
const modifyTag= async(req,res) => {
    try {
    const {  modifyItem } = req.body;
    const client=req.user._id
    const foundProductStock = await productStock.findOne({ client });

    if (!foundProductStock) {
        return res.status(404).json({ error: 'producto no encontrado' });
    }
    console.log(foundProductStock.productsInStock)
    const modifiedProducts = foundProductStock.productsInStock.map((item) => {
        if (String(item._id) === modifyItem.id) {
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
const deleteTag= async(req,res) => {
    try {
    const {id}= req.params
    const client=req.user._id
    const foundProductStock= await productStock.findOne({client})
    if(!foundProductStock){
        res.status(404).json({error:"no se encontro el stock del cliente comuniquese con soporte al cliente"})
    }

    const deletingItem= foundProductStock.productsInStock.filter((item)=>{
        return String(item._id) !==id
    })
    
    foundProductStock.productsInStock= deletingItem;
    const updatedProductStock= await foundProductStock.save()

    res.send({data:"producto eliminado con exito"})
  } catch (error) {
    handlehttpErros(res,`error en delete Product ${error}`,400)
  }
}

module.exports = {
getTag,
  modifyTag,
  deleteTag,
}