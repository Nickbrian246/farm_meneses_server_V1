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

    handlehttpErros(res,"error al registrar el usuario",400, error  )
  }
}
const loginUser= async (req, res)=> {
  try {
    const body= matchedData(req)
    console.log(body,"soy body");
    const user = await Users.findOne({email:body.email})
    const hashPassword= user.password
    const check= await compare(body.password, hashPassword)
  
    if(!check){
      res.status(400).send({errorMessage:"contraseña invalida"})
      return
    }
    const data= {
      token: await tokenSign(user),
      user
    }
    console.log(data)
    res.send({data})
  } catch (error) {
    if(error) {
    return handlehttpErros(res,"lo sentimos  contraseña invalida o correo no valido",400)
  }
    handlehttpErros(res,"error al incio de sesion por favor verifique los datos",400)
  }
}


module.exports= {registerUser,loginUser}