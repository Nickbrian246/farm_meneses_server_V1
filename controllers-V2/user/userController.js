const express= require("express")
const router = express.Router()

const {Users} = require("../../models-v2")
const {handlehttpErros}= require("../../utils/handlehttpsErrors");
const {userDetailsfilter} = require("../../utils/adapter/userDetailsFilter")
/**
 * this controllers get the user details and 
 * send filtered 
 * @param {*} req 
 * @param {*} res 
 */
const getProfileDetails= async (req,res) => {
    try {
    const client = req.user._id
    const find = await Users.findOne({_id:client});
    const dataFiltered = userDetailsfilter(find)
    res.send({data:dataFiltered})

    } catch (error) {
    handlehttpErros(res, `error en inputDinamico ${error}`, 404)
    }
}

module.exports= {getProfileDetails}