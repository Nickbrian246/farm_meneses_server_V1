const {handlehttpErros} = require("../../utils/handlehttpsErrors");
const {matchedData} = require("express-validator");
const {medicineModels} =require("../../models")




const getMedicinesByName = async (req, res) =>{
    try {
        const {name} =matchedData(req)
        const fullData = await medicineModels.find({})
        const data = fullData.filter((item)=> {
            return item.name.includes(name)
        })
        if(data.length===0) {return res.send({data:"no se encontro el elemento"})}
        res.send({data})    
        
    } catch (error) {
        handlehttpErros(res,"error en get medicines  by id de medicines", 400)
    }
}
const updateMedcineByName= async (req, res) =>{
    try {
        const {id,...body} =  matchedData(req);
        const data = await medicineModels.findOneAndUpdate(id, body)
        res.send({data})

    } catch (error) {
        handlehttpErros(res,"error en update ALLproperties medicines de medicines", 400)
    }
}

const deleteMedicineByName = async (req, res) =>{
    try {
        req = matchedData(req);
        const {id} = req;
        const data = await medicineModels.deleteOne({_id:id})
        res.send({data})
    } catch (error) {
        handlehttpErros(res,"error en delete medicines de medicines", 400)
    }
}

module.exports= {
deleteMedicineByName,
getMedicinesByName,
updateMedcineByName,
    
};