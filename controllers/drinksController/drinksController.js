const {drinksModel} = require("../../models");
const {handlehttpErros} = require("../../utils/handlehttpsErrors");

const MEDIA_PATH = `${__dirname}/../../storage`;
const PUBLIC_URL = process.env.PUBLIC_URL

const getItems = async (req,res) => {
    // de esta menera le digo que me traiga todo
    // esto devuelve una promesa
    try {
        const data = await  drinksModel.find({})
        res.send({data});
    } catch (error) {
        handlehttpErros(res,"error en getitem de storage")
    }
    
};
const getItem = async (req,res) => {
    try {
        const {id} = req.params;
        const data = await  drinksModel.findById(id)
        res.send({data});

    } catch (error) {
        handlehttpErros(res, "error en get item de storage")
    }

};
const getDrinksByName = async (req,res) => {
    try {
        const {name} =req.params;
        console.log(name);
        const data = await  drinksModel.findById({})
        res.send({data});

    } catch (error) {
        handlehttpErros(res, "error en get item de storage")
    }

};
const updateItem = async(req,res) => {
    try {
        const {id} =req.params;
        const {body} = req
        const data = await drinksModel.findOneAndUpdate(id,body)
        res.send({data})
    } catch (error) {
        handlehttpErros(res,"error en update de storage")
    }
};
const deleteItem = async(req,res) => {
    try {
        const {id} = req.params;
        const data = await drinksModel.deleteOne({_id:id})
        res.send({data});       

    } catch (error) {
        console.log(error)
        handlehttpErros(res, "error en delete item de storage")
    }
};

const createItem = async (req, res) =>{
try {
const {body} = req
const data= await drinksModel.create(body);
    res.send({data});
} catch (error) {
    console.log(error)
    handlehttpErros(res, "error en create item de storage")
    
}
}

module.exports ={
    createItem,
    getItem,
    getItems,
    deleteItem,
    updateItem,
    getDrinksByName,
};