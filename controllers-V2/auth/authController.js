const express= require("express")
const router = express.Router()
const {Users}= require("../../models-v2")
const {encrypt, compare} =require("../../utils/handlepassword")
const {matchedData} = require("express-validator")
const {handlehttpErros} = require("../../utils/handlehttpsErrors")
const {tokenSign} = require("../../utils/handleJwt")

const registerUser= async (req, res)=> {
  try {
    const body= matchedData(req)
    const passwordEncrypted= await encrypt(body.password)
    const createUser= {...body, password:passwordEncrypted}
    const dataUser= await Users.create(createUser)
    const data= {
      token: await tokenSign(dataUser),
      user:dataUser
    }
    res.send({data})
  } catch (error) {
    if(error.code===11000) {
    return handlehttpErros(res,"lo sentimos este correo ya existe es nuestra base de datos",400)
  }
  console.log(error);
    handlehttpErros(res,"error al registrar el usuario",400)
  }
}
const loginUser= async (req, res)=> {
  try {
    const body= matchedData(req)
  
    const user = await Users.findOne({email:body.email})
    const hashPassword= user.password
    const check= await compare(body.password, hashPassword)
  
    if(!check){
      handlehttpErros(res,"contraseña invaliad",401)
      return
    }
    const data= {
      token: await tokenSign(user),
      user
    }

    res.send({data})
  } catch (error) {
    if(error.code===11000) {
    return handlehttpErros(res,"lo sentimos este correo ya existe es nuestra base de datos",400)
  }
    handlehttpErros(res,"error al registrar el usuario",400)
  }
}


module.exports= {registerUser,loginUser}