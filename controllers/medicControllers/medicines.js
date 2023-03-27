const {handlehttpErros} = require("../../utils/handlehttpsErrors");
const {matchedData} = require("express-validator");
const {medicineModels} =require("../../models")


const createItem=  async( req, res) => {
    try {
        const body = matchedData(req)
        const data =  await medicineModels.create(body)
        res.send({data})
    } catch (error) {
        console.log(error)
        handlehttpErros(res,"error en create Item de medicines", 400)
    }
};


module.exports= {createItem};