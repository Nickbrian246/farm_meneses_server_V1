const {medicineImgModels} =require("../../models");
const {matchedData}= require("express-validator");
const {handlehttpErros} = require("../../utils/handlehttpsErrors");
const fs = require("fs");

const MEDIA_PATH= `${__dirname}/../../storage`;
const PUBLIC_URL = process.env.PUBLIC_URL;


const getItems = async (req,res) => {
    // de esta menera le digo que me traiga todo
    // esto devuelve una promesa
    try {
        const data = await  medicineImgModels.find({})
        res.send({data});
    } catch (error) {
        handlehttpErros(res,"error en getitem de storage")
    }
    
};
const getItem = async (req,res) => {
    try {
        req = matchedData(req);
        const {id} = req;
        const data = await  medicineImgModels.findById(id)
        res.send({data});

    } catch (error) {
        handlehttpErros(res, "error en get item de storage")
    }

};
const updateItem = async(req,res) => {
    try {

        const {id,...body} = matchedData(req);
        const data = await medicineImgModels.findOneAndUpdate(id,body)
        res.send({data})
    } catch (error) {
        handlehttpErros(res,"error en update de storage")
    }
};
const deleteItem = async(req,res) => {
    try {
        const {id} = req.params;
        const datafile = await  medicineImgModels.findById(id)
        await medicineImgModels.deleteOne({_id:id})

        const {fileName} = datafile;
        const filepath = `${MEDIA_PATH}/${fileName}`
        const data = {
            filepath,
            deleted:1,  
        }
        fs.unlinkSync(filepath);
        res.send({data});       

    } catch (error) {
        console.log(error)
        handlehttpErros(res, "error en delete item de storage")
    }
};

const createItem = async (req, res) =>{
try {
const {file }= req
const fileData = {
    fileName: file.filename,
    url:`${PUBLIC_URL}/${file.filename}`
}
const data= await medicineImgModels.create(fileData);
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
};