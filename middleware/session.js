const {handlehttpErros}= require("../utils/handlehttpsErrors")
const {verifySign} = require("../utils/handleJwt")
// este middleware revisara si la persona que desea consumir nuestro endpoint 
// esta logeado por nosotros 
//lo puedo usar en cualquer ruta 
const authMiddleware= async(req, res, next)=> {
  try {
    if (!req.headers.authorization) {
      handlehttpErros(res,"no token", 401)
      return 
    }
    const token = req.headers.authorization.split(" ").pop();
    const dataToken= await verifySign(token)

    if(!dataToken._id){
      handlehttpErros(res,"error id token", 401)
    }
    next()
  } catch (error) {
    handlehttpErros(res,"noy session", 401)
  }
}
module.exports= authMiddleware