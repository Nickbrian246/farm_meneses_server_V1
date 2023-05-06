const {handlehttpErros} = require("../../utils/handlehttpsErrors");
const {matchedData} = require("express-validator");
const {drinksModel} =require("../../models")




const getDrinksByName = async (req, res) =>{
    try {
        const {name} =req.params
        const data =  (await drinksModel.find())
        .filter((item) => {return item.name.includes(name)})
        res.send({data})    
        
    } catch (error) {
        handlehttpErros(res,"error en get drinks  by nombre de medicines", 400)
    }
}

module.exports = {getDrinksByName}